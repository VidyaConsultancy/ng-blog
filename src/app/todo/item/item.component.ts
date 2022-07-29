import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../models/todo/todo';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {
  @Input() todo: Todo;
  @Output('onDelete') onDeleteTodo: EventEmitter<number>;
  @ViewChild('todoItem') todoItemElementRef: ElementRef;

  constructor(private router: Router) {
    this.onDeleteTodo = new EventEmitter<number>();
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

  ngOnInit(): void {
    console.log(this.todoItemElementRef);
  }
  
  ngAfterViewInit(): void {
    console.log(this.todoItemElementRef);
  }

  ngOnDestroy(): void {
    console.log('I get invoked when the component is destroyed')
  }

  deleteTodo() {
    this.onDeleteTodo.emit(this.todo.id);
  }

  handleTodoView() {
    this.router.navigateByUrl('/todo/' + this.todo.id);
    // this.router.navigate(['/todo/' + this.todo.id]);
  }
}
