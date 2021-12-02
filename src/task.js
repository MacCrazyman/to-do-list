export function add (event,list,createTask) {
  list.list.push({
    description: event.target.previousSibling.value,
    complete: false,
    index: list.list.length,
  })
  createTask (list.list[list.list.length-1])
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