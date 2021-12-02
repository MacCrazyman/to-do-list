// Imports
import './style.css';
import Status from './status.js';

// variables
const list = new Status();

// Query selectors
const listContainer = document.querySelector('#list_container');

// Functions
function createTask(task) {
  const listItem = document.createElement('li');
  // listItem.classList.add('flex')
  listItem.innerHTML = `<div id="${task.index}" class="flex cell">
          <input class="checkbox" type="checkbox">
          <textarea class="cell_textarea" rows="1">${task.description}</textarea>
          <div class="drag_icon"></div>
          </div>`;

  listContainer.appendChild(listItem);
}

// Call functions
Object.values(list.list).forEach((value) => createTask(value));

// Event listeners
const check = document.querySelectorAll('.checkbox');
check.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('check');
    list.change(element.parentElement.id);
    element.nextElementSibling.classList.toggle('mark');
  });
});