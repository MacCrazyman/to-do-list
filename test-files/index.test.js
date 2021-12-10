import { JSDOM } from 'jsdom';
import * as index from '../src/index.js';

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
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

document.body.innerHTML = `<ul id="list_container"></ul>`;

describe('testing edit function', () => {
  
});