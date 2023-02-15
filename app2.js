
const todoInput = document.querySelector("#todoInput");
const addButton = document.querySelector("#addButton");
const ul = document.querySelector("#ul");
const removeAllButton = document.querySelector("#removeAllButton");
const searchInput = document.querySelector("#searchInput");
let todoArray = [];
let elementsGroup = [];

openingPage();
addListeners();




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
    searchInput.addEventListener("keyup",searcher);
}



function editButtonClick(e){
    let whichIndex;
    for (const elm in elementsGroup) {
        if(this === elementsGroup[elm][3]){
            whichIndex = elm;
        }
    }

    const feedBack = prompt("After making the change, click the 'OK' button to save.",todoArray[whichIndex]);
    


    if(feedBack == null){
        return;
    }
    else if(feedBack === ""){
        alert("Todo can't be empty.")
    }
    else{

        todoArray[whichIndex] = feedBack;
        localStorage.setItem("ToDoText", todoArray.toString());
        elementsGroup[whichIndex][1].innerHTML = feedBack;
    }


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
    li.className = "list-group-item list-group-item-action custom-add-input f tD";
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
    editButton.addEventListener("click",editButtonClick);
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


















