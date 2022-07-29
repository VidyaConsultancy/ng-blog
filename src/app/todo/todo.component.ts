import { Component, OnInit } from '@angular/core';

import { Todo } from './models/todo/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];

  constructor() {
    for (const tech of [
      'Nodejs',
      'Angular',
      'Reactjs',
      'React Native',
      'FrontEnd Dev',
    ]) {
      this.todos.push(new Todo(`Learn ${tech}`));
    }
  }

  ngOnInit(): void {}

  handleDeleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}
