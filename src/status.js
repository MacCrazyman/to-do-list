export default class Status {
  constructor() {
    if (localStorage.getItem('list') === null) {
      this.list = {
        0: {
          description: 'some description',
          completed: false,
          index: 0,
        },
        1: {
          description: 'today\'s task',
          completed: false,
          index: 1,
        },
        2: {
          description: 'yesterday\'s tast description',
          completed: false,
          index: 2,
        },
      };
    } else {
      this.list = JSON.parse(localStorage.getItem('list'));
    }
  }

  saveStorage = () => {
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  change = (index) => {
    const task = this.list[index];
    task.completed = !task.completed;
    this.saveStorage();
  }
}
