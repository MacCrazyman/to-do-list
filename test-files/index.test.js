import { JSDOM } from 'jsdom';
import * as task from '../src/task.js';
import Status from '../src/status.js';

const list = new Status();
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;


describe('testing edit function', () => {
  const taskElement = { description: 'task Element Object!', completed: false, index: 0 };
  const taskText = { value: 'New task Element Object!' };
  test('should change value of description', () => {
    task.updateTask(taskElement, taskText);
    expect(taskElement.description).toEqual(taskText.value);
  });
});