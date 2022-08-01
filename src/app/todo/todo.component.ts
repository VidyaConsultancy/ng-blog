import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { TodoService } from './services/todo.service';
import { Todo } from './models/todo/todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  // providers: [ServiceName]
})
export class TodoComponent implements OnInit {
  // todos: Todo[];
  todos$!: Observable<Todo[]>;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    // this.todoService.fetchAllTodos();
    this.todos$ = this.todoService.getAllTodos();
  }

  handleDeleteTodo(id: number) {
    this.todoService.deleteTodo(id);
    // this.todos = this.todoService.getAllTodos();
  }

  addTodo() {
    this.todoService.createTodo(new Todo(12, 'Learn MEAN stack'));
  }
}
