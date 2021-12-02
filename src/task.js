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

export function remove (task) {
  console.log('delete task');
}

export function clear (task) {
  console.log('clear completed');
}