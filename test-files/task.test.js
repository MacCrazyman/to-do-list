import { JSDOM } from 'jsdom';

const dom = new JSDOM(); global.document = dom.window.document; global.window = dom.window;
const task = require('../src/task.js');

const newTask = {
  value: 'first task',
};
const list = {
  list: [
    {
      description: 'first task',
      completed: false,
      index: 0,
    },
    {
      description: 'second task',
      completed: false,
      index: 1,
    },
  ],
};

describe('Testing add and remove', () => {
  test('Test add function', () => {
    task.add(newTask, list);
    expect(list.list).toHaveLength(3);
  });

  test('Test remove function', () => {
    document.body.innerHTML = `<ul id="list_container">
  <li><div class="flex cell"><input type="checkbox" class="checkbox"><input class="cell_textarea" id ="1" type="text"><span class="drag_icon">⋮</span></div></li>
  </ul>`;

    const task1 = document.getElementById('1');

    task.remove(list, task1, list.list[0]);
    expect(list.list).toHaveLength(2);
  });
});
