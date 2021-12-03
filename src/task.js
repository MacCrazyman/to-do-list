export function add (task,list,createTask) {
  if (task.value.trim() != '') {
    list.list.push({
      description: task.value,
      completed: false,
      index: list.list.length,
    })
    createTask (list.list[list.list.length-1])
  }
  task.value ='';
}

export function edit (task) {
  console.log('edit task');
}

export function remove (list,taskText,taskElement,storage) {
  list.list.splice(taskElement.index,1)
  order(list);
  taskText.parentElement.parentElement.remove()
}

export function clear (task) {
  console.log('clear completed');
}

export function order (list) {
  list.list.forEach((element,arrayIndex) => {
    element.index = arrayIndex;
  });
}