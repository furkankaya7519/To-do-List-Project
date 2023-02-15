
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector("#ul");
const removeAllButton = document.querySelector("#removeAllButton");
let todoArray = [];
let elementsGroup = [];

openingPage();
addListeners();


function openingPage() {

    if (localStorage.getItem("ToDoText") != null) {
        todoArray = localStorage.getItem("ToDoText").split(",");

        for (const todo of todoArray) {
            addElements(todo);
        }
    }

}

function addListeners() {
    todoInput.addEventListener("click", todoInputClick);
    addButton.addEventListener("click", addButtonClick);
    removeAllButton.addEventListener("click", removeAllButtonClick);
}

function removeButtonClick(){

    let whichIndex;
    for (const elm in elementsGroup) {
        if(this === elementsGroup[elm][4]){
            whichIndex = elm;
        }
    }

    
    

    elementsGroup[whichIndex][0].remove();
    elementsGroup[whichIndex][1].remove();
    elementsGroup[whichIndex][2].remove();
    elementsGroup[whichIndex][3].remove();
    elementsGroup[whichIndex][4].remove();
    
    if(todoArray.length === 1){
        todoArray.length = 0;
        localStorage.removeItem("ToDoText");
        elementsGroup.length = 0;
    }
    else{
        todoArray.splice(whichIndex,1);
        localStorage.setItem("ToDoText",todoArray.toString());
        elementsGroup.splice(whichIndex,1);
    }
}

function removeAllButtonClick() {
    const removedElements = document.querySelectorAll(".f");

    if (removedElements.length != 0) {
        todoArray.length = 0;
        localStorage.removeItem("ToDoText");
        removeElements();
        elementsGroup.length = 0;
    }

}


function removeElements() {
    const removedElements = document.querySelectorAll(".f");
    for (const r of removedElements) {
        r.remove();
    }
}


function todoInputClick() {
    todoInput.value = "";
}

function addButtonClick() {

    if (checkTodoInput()) {
        todoInput.value = "Todo can not be empty.";
        return;
    }

    addElements(todoInput.value);

    todoArray.push(todoInput.value);
    localStorage.setItem("ToDoText", todoArray.toString());
}

function checkTodoInput() {

    if (todoInput.value.length === 0) {
        return true;
    }
    return false;
}

function addElements(text) {
    let eG = [];
    const div = document.createElement("div");
    div.className = "custom-add f";
    ul.appendChild(div);
    eG.push(div);
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-action custom-add-input f";
    li.innerHTML = text;
    div.appendChild(li);
    eG.push(li);
    const div2 = document.createElement("div");
    div2.className = "btn-group custom-add-button f";
    div2.role = "group";
    div2.ariaLabel = "Basic example";
    div.appendChild(div2);
    eG.push(div2);
    const editButton = document.createElement("button");
    editButton.className = "btn-outline-success border-0 bg-white f";
    editButton.innerHTML = "📏";
    div2.appendChild(editButton);
    eG.push(editButton);
    const removeButton = document.createElement("button");
    removeButton.className = "btn-outline-success border-0 bg-white f";
    removeButton.innerHTML = "🗑";
    removeButton.addEventListener("click",removeButtonClick);
    div2.appendChild(removeButton);
    eG.push(removeButton);
    elementsGroup.push(eG);
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