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
          <input class="checkbox" type="checkbox">
          <textarea class="cell_textarea" rows="1">${task.description}</textarea>
          <div class="drag_icon"></div>
          </div>`;
  
  list_container.appendChild(list_item);
  
}

// Call functions
list.forEach((task) => create_task(task))

// Event listeners
  const check = document.querySelectorAll('.checkbox');
  const text = document.querySelectorAll('.cell_textarea')
  check.forEach((element) =>  {element.addEventListener('click',() => {
    element.classList.toggle('check');
    element.nextElementSibling.classList.toggle('mark');
  });}
  )