
const addButton = document.querySelector("#addButton");
const removeAllButton = document.querySelector("#removeAllButton");
const removeButton = document.querySelector("#removeButton");
const editButton = document.querySelector("#editButton");
const todoInput = document.querySelector("#todoInput");
const searchInput = document.querySelector("#searchInput");
const todoListGroup = document.querySelector("#todoListGroup");
let todoArray = [];
let todoList;
let clickedEleman = -1;



showTodos();
addListeners();




function showTodos(){
    
    if(localStorage.getItem("todoList") == null){
        return;
    }

    if(localStorage.getItem("todoList") != null){
        let str = localStorage.getItem("todoList");
        todoArray = str.split(",");
        
        for (const iterator of todoArray) {
            addToDoElement(iterator,0);
        }
    }
    
    todoList = document.querySelectorAll(".tD");
    
}



function addListeners(){
    addButton.addEventListener("click",addButtonListener);
    removeAllButton.addEventListener("click",removeAllButtonListener);
    removeButton.addEventListener("click",removeButtonListener);
    editButton.addEventListener("click",editButtonListener);
    searchInput.addEventListener("keyup",searcher);
}


function searcher(e){
    
    const searchValue = e.target.value.toLowerCase().trim();
    const tdL = document.querySelectorAll(".tD");

    if(tdL.length>0){
        tdL.forEach(function(myTodo){

            if(myTodo.textContent.toLowerCase().trim().includes(searchValue)){

                myTodo.setAttribute("style","display : block");
            }
            else{
                myTodo.setAttribute("style","display : none !important");
            }
        })
    }
}

function editButtonListener(){
    if(clickedEleman != -1){
        
        const feedBack = prompt("After making the change, click the 'OK' button to save.",todoArray[clickedEleman]);
        resetBackColor();
        
        if(feedBack == null){
            return;
            clickedEleman = -1;
        }
        else if(feedBack === ""){
            alert("Todo can't be empty.")
        }
        else{
            todoList[clickedEleman].innerHTML = feedBack;
            todoArray[clickedEleman] = feedBack;
            localStorage.setItem("todoList", todoArray.toString());
        }

        clickedEleman = -1;
    }
    else{
        alert("You have to select an item from the to-do list.");
    }
}

function removeButtonListener(){

    if(clickedEleman != -1){
        todoList[clickedEleman].remove();
        todoList = document.querySelectorAll(".tD");
        
        todoArray.splice(clickedEleman,1);
        localStorage.setItem("todoList", todoArray.toString());

        clickedEleman = -1;
    }
    else{
        alert("You have to select an item from the to-do list.");
    }
}


function listElemanListener(){
    resetBackColor();
    this.style.backgroundColor = "aqua";

    for (const iterator in todoList) {
        
        if(todoList[iterator] === this){
            clickedEleman = iterator;
        }
    }


    
}


function resetBackColor(){
    for (const iterator of todoList) {
        iterator.style.backgroundColor = "";
    }
}




function removeAllButtonListener(){
    
    localStorage.removeItem("todoList");
    todoArray = [];
    let myList = document.querySelectorAll(".tD");
    
    for (const m of myList) {
        m.remove();
    }

    
}



function addButtonListener(){
    if(checkTodoInput()){
        alert("Todo can't be empty.")
        return;
    }
    addToDoElement(todoInput.value,1);
    todoInput.value = "";

}

function checkTodoInput(){

    if(todoInput.value.length === 0){
        return true;
    }
    return false;
}

function addToDoElement(t,w){

    const listElement = document.createElement("li");
    listElement.className = "list-group-item list-group-item-action tD";
    listElement.innerHTML = t;
    listElement.addEventListener("click",listElemanListener);
    todoListGroup.appendChild(listElement);
    todoList = document.querySelectorAll(".tD");
    resetBackColor();
    clickedEleman = -1;
    if(w === 1){
        todoArray.push(t);
    }
    

    let str = localStorage.getItem("todoList");
    if(str == null){
        localStorage.setItem("todoList", todoArray.toString());
    }
    else{
        localStorage.setItem("todoList",  todoArray.toString());
    }
    
}


