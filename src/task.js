function add(task, list) {
  list.list.push({
    description: task.value,
    completed: false,
    index: list.list.length,
  });
}

function order(list) {
  list.list.forEach((element, arrayIndex) => {
    element.index = arrayIndex;
  });
}

function remove(list, taskText, taskElement) {
  list.list.splice(taskElement.index, 1);
  order(list);
  taskText.parentElement.parentElement.remove();
}

function clear(list) {
  list.list = list.list.filter((element) => element.completed === false);
  order(list);
}

module.exports = {add, remove};