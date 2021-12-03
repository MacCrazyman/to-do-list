export function add(task, list, createTask) {
  if (task.value.trim() !== '') {
    list.list.push({
      description: task.value,
      completed: false,
      index: list.list.length,
    });
    createTask(list.list[list.list.length - 1]);
  }
  task.value = '';
}

export function order(list) {
  list.list.forEach((element, arrayIndex) => {
    element.index = arrayIndex;
  });
}

export function remove(list, taskText, taskElement) {
  list.list.splice(taskElement.index, 1);
  order(list);
  taskText.parentElement.parentElement.remove();
}

export function clear(list) {
  list.list = list.list.filter((element) => element.completed === false);
  order(list);
}