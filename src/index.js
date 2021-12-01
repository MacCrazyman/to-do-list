// Imports
import './style.css';

// variables
const list = [
  {
    description: 'some description',
    completed: 0,
    index: 0,
  },
  {
    description: 'today\'s task',
    completed: 0,
    index: 0,
  },
  {
    description: 'yesterday\'s tast description',
    completed: 0,
    index: 0,
  },
];

// Query selectors
const listContainer = document.querySelector('#list_container');

// Functions
function createTask(task) {
  const listItem = document.createElement('li');
  // listItem.classList.add('flex')
  listItem.innerHTML = `<div class="flex cell">
          <input class="checkbox" type="checkbox">
          <textarea class="cell_textarea" rows="1">${task.description}</textarea>
          <div class="drag_icon"></div>
          </div>`;

  listContainer.appendChild(listItem);
}

// Call functions
list.forEach((task) => createTask(task));

// Event listeners
const check = document.querySelectorAll('.checkbox');
check.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('check');
    element.nextElementSibling.classList.toggle('mark');
  });
});