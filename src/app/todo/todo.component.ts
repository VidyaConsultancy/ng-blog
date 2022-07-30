import { Component, OnInit } from '@angular/core';

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // providers: [ServiceName]
})
export class TodoComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getAllTodos();
  }

  handleDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    this.todos = this.todoService.getAllTodos();
  }
}
