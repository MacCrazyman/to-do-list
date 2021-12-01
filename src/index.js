// Imports
import './style.css'

// variables
const list = [
  {
    description : 'some description',
    completed : 0,
    index : 0
  },
  {
    description : 'today\'s task',
    completed : 0,
    index : 0
  },
  {
    description : 'yesterday\'s tast description',
    completed : 0,
    index : 0
  },
];

// Query selectors
const list_container = document.querySelector('#list_container');

// Functions
function create_task(task){
  const list_item = document.createElement('li')
  // list_item.classList.add('flex')
  list_item.innerHTML =`<div class="flex cell">
          <input type="checkbox">
          <textarea class="cell_textarea" rows="1">${task.description}</textarea>
          <div class="drag_icon"></div>
          </div>`;
  list_container.appendChild(list_item);
}

// Event listeners

// Call functions
list.forEach((task) => create_task(task))