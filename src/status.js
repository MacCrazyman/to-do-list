export default class Status {
  constructor() {
    if (localStorage.getItem('list') === null) {
      this.list = [];
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
