import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Todo } from '../models/todo/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  todo: Todo | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      console.log(`params`, params);
      const todoId = +params['id'];
      this.todo = this.todoService.getTodoById(todoId);
    });
    this.route.queryParams.subscribe((query) => {
      console.log(`query params`, query);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteTodo(id: number) {
    if (this.todo) this.todoService.deleteTodo(id);
    this.router.navigateByUrl('/todo');
  }
}
