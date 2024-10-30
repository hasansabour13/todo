export class Model {
  user;
  items;

  constructor() {
    this.user = 'TopLearn-soroush';
    
    this.items = [
      { action: 'Buy Computer', done: false },
      { action: 'Do Work', done: false },
      { action: 'Task One', done: true },
      { action: 'Work Second', done: false }
    ];
  }
}
//ساختار وقالب مشخص برای ایتم ها.
//هر وقتم نیاز به ایتم جدید داشتم از این نمونه سازی میکنیم.const newItem = new TodoItem('New Task', false);



export class TodoItem {
  action;
  done;

  constructor(action: any, done: any) {
    this.action = action;
    this.done = done;
  }
}
