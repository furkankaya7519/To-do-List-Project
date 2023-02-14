
const addButton = document.querySelector("#addButton");
const removeAllButton = document.querySelector("#removeAllButton");
const todoInput = document.querySelector("#todoInput");
const todoListGroup = document.querySelector("#todoListGroup");
let todoArray = [];
let todoList;



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
}






function removeAllButtonListener(){
    
    localStorage.removeItem("todoList");

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
    todoListGroup.appendChild(listElement);
    
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


