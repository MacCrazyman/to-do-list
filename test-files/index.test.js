import * as task from '../src/task.js';
import Status from '../src/status.js';

const list = new Status();

describe('testing edit function', () => {
  list.list[0] = { description: 'task Element Object!', completed: false, index: 0 };
  const taskElement = list.list[0];
  const taskText = { value: 'New task Element Object!' };
  test('should change value of description', () => {
    task.updateTask(taskElement, taskText);
    expect(taskElement.description).toEqual(taskText.value);
  });

  test('The status of the task should change from false to true', () =>{
    list.mark(0);
    expect(list.list[0].completed).toBeTruthy();
  });

  test('The array should be empty', () => {
    task.clear(list);
    expect(list.list).toHaveLength(0);
  })
});