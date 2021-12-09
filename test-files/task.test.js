const task = require('../src/task')
  const newTask ={
      value: 'first task',
    };
  const list={
    list: [
      {
        description: 'first task',
        completed: false,
        index:0
      },
    ]
  };



describe('Testing add and remove', () => {

  test('Test add function', () => {
    task.add(newTask,list);
    expect(list.list).toHaveLength(2);
  })
})
