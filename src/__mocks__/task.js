function createTask(taskElement) {
    const listItem = document.createElement('li');
    const divItem = document.createElement('div');
    const taskcheck = document.createElement('input');
    const taskText = document.createElement('input');
    const dragIcon = document.createElement('span');
  
    divItem.classList.add('flex', 'cell');
    taskcheck.setAttribute('type', 'checkbox');
    taskcheck.classList.add('checkbox');
    taskcheck.checked = taskElement.completed;
  
    taskText.classList.add('cell_textarea');
    taskText.setAttribute('type', 'text');
    taskText.value = taskElement.description;
  
    dragIcon.classList.add('drag_icon');
    dragIcon.innerHTML = '&#8942;';
  
    if (taskElement.completed) {
      taskcheck.classList.add('check');
      taskText.classList.add('mark');
    }
  
    listItem.appendChild(divItem);
    divItem.appendChild(taskcheck);
    divItem.appendChild(taskText);
    divItem.appendChild(dragIcon);
    listContainer.appendChild(listItem);
  
    taskcheck.addEventListener('click', () => (taskcheck.checked ? markDone(taskcheck, taskElement.index) : unmarkDone(taskcheck, taskElement.index)));
    taskText.addEventListener('change', () => {
      taskElement.description = taskText.value;
      list.saveStorage();
    });
  
    function deleteField() {
      task.remove(list, taskText, taskElement);
      list.saveStorage();
    }
  
    taskText.addEventListener('focusin', () => {
      divItem.classList.add('editing');
      dragIcon.innerHTML = '&#128465;';
      dragIcon.addEventListener('click', deleteField);
    });
  
    taskText.addEventListener('focusout', () => {
      divItem.classList.remove('editing');
      dragIcon.innerHTML = '&#8942;';
    });
  
    list.saveStorage();
  }
