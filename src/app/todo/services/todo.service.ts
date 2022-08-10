import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Todo } from '../models/todo/todo';

interface Response<T, E> {
  success: boolean;
  message: string;
  code: number;
  error: E;
  resource: string;
  data: T;
}

// providedIn
// root => single instance for the whole angular app
// platform => single instance for multiple angular app running in a single browser window
// any => single instance for all eagerly loaded modules, and respective instances for lazyly loaded modules
// ModuleName => scopes the service to the ModuleName only
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly baseAPIUrl = `${environment.baseAPIUrl}/todos`;
  private todos: Todo[] = [];
  private message: string = '';
  private message$: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Hello'
  );
  // constructor(private service: ServiceName)
  private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);

  constructor(private http: HttpClient) {
    // this.todos = [];
    // for (const [index, tech] of [
    //   'Nodejs',
    //   'Angular',
    //   'Reactjs',
    //   'React Native',
    //   'FrontEnd Dev',
    // ].entries()) {
    //   this.todos.push(new Todo(index, `Learn ${tech}`));
    // }
  }

  public getMessage(): Observable<string> {
    return this.message$.asObservable();
  }

  public getStaticMessage() {
    return this.message;
  }

  public setMessage(msg: string): void {
    this.message$.next(msg);
    this.message = msg;
  }

  public fetchAllTodos(): void {
    const token = localStorage.getItem('accessToken');
    this.http
      .get<Todo[]>(this.baseAPIUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((todos) => {
        this.todos = todos;
        this.todos$.next(todos);
      });
  }

  public fetchAllTodosData(): Observable<Todo[]> {
    const token = localStorage.getItem('accessToken');
    return this.http.get<Todo[]>(this.baseAPIUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public getAllTodos(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  public deleteTodo(id: number) {
    this.http.delete(`${this.baseAPIUrl}/${id}`).subscribe(() => {
      const todos = this.todos$.getValue();
      const updatedTodos = todos.filter((todo) => todo.id !== id); // business logic
      this.todos$.next(updatedTodos);
      // or
      // this.fetchAllTodos();
      // or to reload the page
    });
    // this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  public getTodoById(id: number): Observable<Todo> {
    // const todo = this.todos.find((todo) => todo.id === id);
    // return todo;
    const token = localStorage.getItem('accessToken');
    return this.http.get<Todo>(`${this.baseAPIUrl}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  public createTodo(todo: Partial<Todo>) {
    const token = localStorage.getItem('accessToken');
    this.http
      .post<Todo>(this.baseAPIUrl, todo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .subscribe((response) => {
        const todos = this.todos$.getValue();
        const updatedTodos = [...todos, response];
        this.todos$.next(updatedTodos);
      });
  }
}
