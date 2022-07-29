import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output('onDelete') onDeleteTodo: EventEmitter<number>;

  constructor() {
    this.onDeleteTodo = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  deleteTodo() {
    this.onDeleteTodo.emit(this.todo.id);
  }
}
