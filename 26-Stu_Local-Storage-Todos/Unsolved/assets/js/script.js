const todoInput = document.querySelector('#todo-text');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');
const todoCountSpan = document.querySelector('#todo-count');

const todos = [];

// TODO: What is the purpose of this function?
// The purpose of the 'renderToDos' function is to loop through the 'todos' array taking each each element and adding it in an unordered html list.
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  // Sets the text content of the th <ul> list to an empty string.
  todoList.innerHTML = '';
  // Renders the number of rendered items by taking to the length of the 'todos' array.
  todoCountSpan.textContent = todos.length;
  // TODO: Describe the functionality of the following `for` loop.
  // Loops through the 'todos' array and assigns each element to a 'todo' variable.
  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    // Creates an list element <li>.
    const li = document.createElement('li');
    // Setting the inner HTML to  yje content from the 'todos' list.
    li.textContent = todo;
    // Setting the the data attribute to the value of the index generated from the for loop.
    li.setAttribute('data-index', i);
    // Create an HTML button element.
    const button = document.createElement('button');
    // Adding the text to the button element.
    button.textContent = 'Complete ✔️';
    // Appending the button to the li element.
    li.appendChild(button);
    // Appending the li to the 'todo' list.
    todoList.appendChild(li);
  }
}
// TODO: What is the purpose of the following function?
// To retrieve the todo item in the browser's local storage.
function init() {
  // TODO: What is the purpose of the following line of code?
  // Parse the local storage values by selecting the 'todos' key.
  const storedTodos = JSON.parse(localStorage.getItem('todos'));
  // TODO: Describe the functionality of the following `if` statement.
  // If there is data in the Local Storage, store it in the 'todos' list.
  if (storedTodos !== null) {
    todos = storedTodos;
  }
  // TODO: Describe the purpose of the following line of code.
  // Calls the 'renderTodos' function.
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  // To a JSON value to the 'todos' key.
  localStorage.setItem('todos', JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
// Adds the text input to the HTML form on submit *enter.
todoForm.addEventListener('submit', function (event) {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  // If the input text is an empty string, exit out of the function. 
  if (todoText === '') {
    return;
  }
  // TODO: Describe the purpose of the following lines of code.
  // Pushes text to the 'todos' array and then sets the input placeholder text to a blank string.
  todos.push(todoText);
  todoInput.value = '';

  // TODO: What will happen when the following functions are called?
  // You will call the the function to store, then to render the data.
  storeTodos();
  renderTodos();
});
// TODO: Describe the purpose of the following line of code.
// Initiate a function when a user click the button.
todoList.addEventListener('click', function (event) {
  const element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  // It searches for a button, gets the data-index value and removes the corresponding array value based on that index. And will remove the value from the local storage.
  if (element.matches('button') === true) {
    const index = element.parentElement.getAttribute('data-index');
    todos.splice(index, 1);
    // TODO: What will happen when the following functions are called?
     // You will call the the function to store, then to render the data.
    storeTodos();
    renderTodos();
  }
});

init();
