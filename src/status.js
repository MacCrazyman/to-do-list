export default class Status {
  constructor() {
    if (localStorage.getItem('list') === null) {
      this.list = [
        {
          description: 'some description',
          completed: false,
          index: 0,
        },
        {
          description: 'today\'s task',
          completed: false,
          index: 1,
        },
        {
          description: 'yesterday\'s tast description',
          completed: false,
          index: 2,
        },
      ];
    } else {
      this.list = JSON.parse(localStorage.getItem('list'));
    }
  }

  saveStorage = () => {
    localStorage.setItem('list', JSON.stringify(this.list));
  }

  mark = (index) => {
    const task = this.list[index];
    task.completed = true;
    this.saveStorage();
  }

  unmark = (index) => {
    const task = this.list[index];
    task.completed = false;
    this.saveStorage();
  }
}
