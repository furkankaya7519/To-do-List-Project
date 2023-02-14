
const addButton = document.querySelector("#addButton");
const todoInput = document.querySelector("#todoInput");
const todoListGroup = document.querySelector("#todoListGroup");
let todoArray = [];


showTodos();
addListeners();




function showTodos(){
    
    if(localStorage.getItem("todoList") != null){
        let str = localStorage.getItem("todoList");
        todoArray = str.split(",");
        
        for (const iterator of todoArray) {
            addToDoElement(iterator,0);
        }
    }
    
    
}



function addListeners(){
    addButton.addEventListener("click",addButtonListener);
}



function addButtonListener(){
    if(checkTodoInput()){
        alert("Todo can't be empty.")
        return;
    }
    addToDoElement(todoInput.value,1);

}

function checkTodoInput(){

    if(todoInput.value.length === 0){
        return true;
    }
    return false;
}

function addToDoElement(t,w){
    const listElement = document.createElement("li");
    listElement.className = "list-group-item list-group-item-action";
    listElement.innerHTML = t;
    todoListGroup.appendChild(listElement);
    
    if(w === 1){
        todoArray.push(t);
    }
    

    let str = localStorage.getItem("todoList");
    if(str === null){
        localStorage.setItem("todoList", todoArray.toString());
    }
    else{
        localStorage.setItem("todoList",  todoArray.toString());
    }
    
}


