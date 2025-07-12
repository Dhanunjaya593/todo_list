let todoContainerEl = document.getElementById('todo-container');
let addButtonElement = document.getElementById("addButton")

let todoList = [{
        text: "learn Html",
        uniqueNO: 1
    },
    {
        text: "learn CSS",
        uniqueNO: 2
    },
    {
        text: "learn JavaScript",
        uniqueNO: 3
    }

];



function ondoStatusChanged(chequeNumber, labelNumber) {
    let inputElemnt = document.getElementById(chequeNumber);
    //console.log(inputElemnt.checked) 

    let labelElement = document.getElementById(labelNumber);

    /* if(inputElemnt.checked === true){
         labelElement.classList.add("label-text-dec")
     } 
     else {
         labelElement.classList.remove("label-text-dec")
     }*/

    labelElement.classList.toggle("label-text-dec")

}

function onDeleteTodoItem(deleteElement) {
    let deleteLabel = document.getElementById(deleteElement);
    todoContainerEl.removeChild(deleteLabel)
}

function createAndAppendlisBox(todoList) {


    let chequeNumber = "checkbox" + todoList.uniqueNO;
    let labelNumber = "label" + todoList.uniqueNO;
    let deleteElement = "todo" + todoList.uniqueNO;
    // console.log(chequeNumber)
    let listboxElemnet = document.createElement("li");
    listboxElemnet.classList.add("todo-item-container", "d-flex", "flex-row");
    listboxElemnet.id = deleteElement
    todoContainerEl.appendChild(listboxElemnet)
    let checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox"
    checkBoxEl.id = chequeNumber;
    checkBoxEl.classList.add("ckeckbox-style")
    listboxElemnet.appendChild(checkBoxEl);

    let labelCOntainer = document.createElement("div");
    labelCOntainer.classList.add("label-container", "d-flex", "flex-row")
    listboxElemnet.appendChild(labelCOntainer)

    checkBoxEl.onclick = function() {
        ondoStatusChanged(chequeNumber, labelNumber);


    }
    let labeltextElement = document.createElement('label');
    labeltextElement.setAttribute("for", chequeNumber)
    labeltextElement.id = labelNumber;
    labeltextElement.textContent = todoList.text;
    labeltextElement.classList.add("label-style")
    labelCOntainer.appendChild(labeltextElement);

    let deleteContainer = document.createElement("div");
    deleteContainer.classList.add("d-flex", "flex-row");
    labelCOntainer.appendChild(deleteContainer)

    let deleteicon = document.createElement("i");
    deleteicon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteicon.onclick = function() {
        onDeleteTodoItem(deleteElement)
    }
    deleteContainer.appendChild(deleteicon)

}

function onAddCreateTask() {
    let todoLenght = todoList.length;
    todoLenght = todoLenght + 1
    let userInputElement = document.getElementById("userInput");
    let userInputValue = userInputElement.value;
    if (userInputValue === "") {
        alert("Enter Value Input")
        return
    }

    let newTodo = {
        text: userInputValue,
        uniqueNo: todoLenght
    }

    createAndAppendlisBox(newTodo);
    userInputElement.value = "";


}
addButtonElement.onclick = function() {
    onAddCreateTask()

}


for (let todo of todoList) {
    createAndAppendlisBox(todo)
}