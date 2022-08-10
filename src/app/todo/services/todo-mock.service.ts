import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from '../models/todo/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoMockService {
  public fetchAllTodosData(): Observable<Todo[]> {
    const todos = [new Todo(1, 'One'), new Todo(2, 'Two')];
    return of(todos);
  }

  public getTodoById(id: number): Observable<Todo> {
    return of(new Todo(id, 'One'));
  }
}
