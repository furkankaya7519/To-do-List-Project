
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector("#ul");
let todoArray = [];


openingPage();
addListeners();


function openingPage(){
    
    if(localStorage.getItem("ToDoText") != null){
        todoArray = localStorage.getItem("ToDoText").split(",");

        for (const todo of todoArray) {
            addElements(todo);
        }
    }
    
}

function addListeners(){
    todoInput.addEventListener("click",todoInputClick);
    addButton.addEventListener("click",addButtonClick);
}


function todoInputClick(){
    todoInput.value = "";
}

function addButtonClick(){

    if(checkTodoInput()){
        todoInput.value = "Todo can not be empty.";
        return;
    }
    
    addElements(todoInput.value);

    todoArray.push(todoInput.value);
    localStorage.setItem("ToDoText",todoArray.toString());
}

function checkTodoInput(){

    if(todoInput.value.length === 0){
        return true;
    }
    return false;
}

function addElements(text){
    const div = document.createElement("div");
    div.className = "custom-add";
    ul.appendChild(div);
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-action custom-add-input";
    li.innerHTML = text;
    div.appendChild(li);
    const div2 = document.createElement("div");
    div2.className = "btn-group custom-add-button";
    div2.role = "group";
    div2.ariaLabel = "Basic example";
    div.appendChild(div2);
    const editButton = document.createElement("button");
    editButton.className = "btn-outline-success border-0 bg-white";
    editButton.innerHTML = "📏";
    div2.appendChild(editButton);
    const removeButton = document.createElement("button");
    removeButton.className = "btn-outline-success border-0 bg-white";
    removeButton.innerHTML = "🗑";
    div2.appendChild(removeButton);
}



















/*

 <div class="custom-add">
                <li class="list-group-item list-group-item-action custom-add-input">fewfew</li>
                <div class="btn-group custom-add-button" role="group" aria-label="Basic example">
                    <button class="btn-outline-success border-0 bg-white">📏</button>
                    <button class="btn-outline-success border-0 bg-white">🗑</button>
                </div>
</div>

            <div class="custom-add">
                <li class="list-group-item list-group-item-action custom-add-input">fewfew</li>
                <div class="btn-group custom-add-button" role="group" aria-label="Basic example">
                    <button class="btn-outline-success border-0 bg-white">📏</button>
                    <button class="btn-outline-success border-0 bg-white">🗑</button>
                  </div>
            </div>

            <div class="custom-add">
                <li class="list-group-item list-group-item-action custom-add-input">fewfew</li>
                <div class="btn-group custom-add-button" role="group" aria-label="Basic example">
                    <button class="btn-outline-success border-0 bg-white">📏</button>
                    <button class="btn-outline-success border-0 bg-white">🗑</button>
                  </div>
            </div>

            <div class="custom-add">
                <li class="list-group-item list-group-item-action custom-add-input">fewfew</li>
                <div class="btn-group custom-add-button" role="group" aria-label="Basic example">
                    <button class="btn-outline-success border-0 bg-white">📏</button>
                    <button class="btn-outline-success border-0 bg-white">🗑</button>
                  </div>
            </div>

*/