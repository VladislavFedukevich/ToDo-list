//Selectors
const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.add-button');
const todoList = document.querySelector('.to-do-list');

//Event Listeners
todoButton.addEventListener('click', addItem);


//Functions
function addItem(Event) {
    //delete update page onclick on the button
    Event.preventDefault();

    //create a parent item consists of todo items
    const div = document.createElement('div');
    div.classList.add('todo');

    //create items
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.textContent = todoInput.value;
    todoInput.value = '';
    div.appendChild(todoItem);

    //create button to add item
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>'
    checkButton.classList.add('addItem');
    div.appendChild(checkButton);

    //check the todoItem
    checkButton.addEventListener('click', function (Event) {
        if (Event.target === checkButton) {
            todoItem.classList.toggle('toggle');
        }
    });

    //create button to delete item
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash">';
    deleteButton.classList.add('deleteItem');
    div.appendChild(deleteButton);

    //delete todoItem
    deleteButton.addEventListener('click', function deleteItem(Event) {
        if (Event.target === deleteButton) {
            div.remove();
        }


    });

    //append div with items to the list of them
    todoList.appendChild(div);
}

