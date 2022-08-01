import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo/todo';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  @Input('todos-list') todos!: Todo[] | null;
  @Output('onDeleteTodo') onDeleteTodoEvent: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  handleOnDelete(id: number) {
    this.onDeleteTodoEvent.emit(id);
  }
}
