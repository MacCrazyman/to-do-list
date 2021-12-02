// Imports
import './style.css';
import { status } from './status';

// variables
const list = new status();
// const list = [
//   {
//     description: 'some description',
//     completed: 0,
//     index: 0,
//   },
//   {
//     description: 'today\'s task',
//     completed: 0,
//     index: 0,
//   },
//   {
//     description: 'yesterday\'s tast description',
//     completed: 0,
//     index: 0,
//   },
// ];

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
for (const task in list.list) createTask(list.list[task]);

// Event listeners
const check = document.querySelectorAll('.checkbox');
check.forEach((element) => {
  element.addEventListener('click', () => {
    element.classList.toggle('check');
    list.change(element.parentElement.id);
    element.nextElementSibling.classList.toggle('mark');
  });
});