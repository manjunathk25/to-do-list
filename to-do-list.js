const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

function displayList(){
    let toDoListHTML = '';
    for(let i = 0; i < toDoList.length; i++){
        const todoObject = toDoList[i];
        // const todoValue = todoObject.todoValue;
        // const dateValue = todoObject.dateValue;
        //destructuring
        const {todoValue} = todoObject;
        const {dateValue} = todoObject;
        const html = `
        <p class="output-grid">
            <span class="todo-output">${todoValue}</span>
            <span class="date-time">${dateValue}</span>
            <button class="del-button"
            onclick="
            toDoList.splice(${i}, 1);
            localStorage.setItem('toDoList', JSON.stringify(toDoList));
            displayList();
            ">Delete</button>
        </p>
        `;
        toDoListHTML += html;
    }
    document.querySelector('.js-todo-list').innerHTML = toDoListHTML;
}

function addToList(){
    const inputElement1 = document.querySelector('.js-todo-input');
    const todoValue = inputElement1.value;
    const inputElement2 = document.querySelector('.js-date-input');
    const dateValue = inputElement2.value;

    if(todoValue != '' && dateValue != ''){
        toDoList.push({todoValue, dateValue});
    }
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    displayList();
    inputElement1.value = '';
    inputElement2.value = '';
}

function setMinDateTime(){
    const dateInputElement = document.querySelector('.js-date-input');
    const now = new Date();

    const minDate = now.toISOString().slice(0,16);
    dateInputElement.min = minDate;
}
document.addEventListener('DOMContentLoaded', displayList);
document.addEventListener('DOMContentLoaded', setMinDateTime);