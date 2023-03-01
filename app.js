var notImportantIcon = "fa-regular fa-bookmark";
var importantIcon = "fa-solid fa-bookmark";
var isImportant = false;


function toggleImportant(){


    function toggleView(){
    if(isImportant){
        //change to not important
        isImportant = false;
        $("#formIcon")
            .removeClass(importantIcon)
            .addClass(notImportantIcon);

    }
    else{
        //change it to important
        isImportant = true;
        $("#formIcon")
        .removeClass(notImportantIcon)
        .addClass(importantIcon);
    }
    }
}

function toggleView(){
    if(isVisible) {
        isVisible = false;
        $("#form").hide();
    }
    else {
        isVisible = true;
        $("#form").show();
    }
}


function saveTask(){
    let title = $("#txtTitle").val();
    let desc = $("#txtDesc").val(); 
    let dueDate = $("#dueDate").val();
    let category = $("#selCategory").val();
    let priority = $("#selPriority").val();
    let color= $("#selColor").val();

    console.log(isImportant, title, desc, dueDate, category, priority, color);

    let task = new Task(isImportant, title, desc, dueDate, category, priority, color);
    console.log(task);
    displayTask(task);
}


function displayTask(task){

    let icon = "";
    if(task.isImportant) {
        icon = `<i class='${importantIcon}'></i>`;
    }
    else {
        icon = `<i class='${notImportantIcon}'></i>`;
    }
    

    let syntax = `<div class='task' style="border: 2px solid ${task.color}">

        ${icon}

        <div class='info'>
            <h5>${task.title}</h5>
            <p>${task.description}</p>
    </div>

    <label class='dueDate'>${task.dueDate}</label>

    <div class='details'>
             <label>${task.category}</label>
            <label>${task.priority}</label>
        </div>  
    </div>`;

   
    $("#pending-tasks").append(syntax);
}


function init(){
    console.log("Task Manager");



    //hook events
    $("#formIcon").click(toggleImportant);
    $("#toggleView").click(toggleView);
    $("#btnSave").click(saveTask);

    //load data
}


window.onload = init;