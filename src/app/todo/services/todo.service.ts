import { Injectable } from "@angular/core";
import { Todo } from "../models/todo/todo";

// providedIn
  // root => single instance for the whole angular app
  // platform => single instance for multiple angular app running in a single browser window
  // any => single instance for all eagerly loaded modules, and respective instances for lazyly loaded modules
  // ModuleName => scopes the service to the ModuleName only
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todos: Todo[] = [];
  // constructor(private service: ServiceName)
  constructor() {
    // this.todos = [];
    for (const [index, tech] of [
      'Nodejs',
      'Angular',
      'Reactjs',
      'React Native',
      'FrontEnd Dev',
    ].entries()) {
      this.todos.push(new Todo(index, `Learn ${tech}`));
    }
  }

  public getAllTodos(): Todo[] {
    return this.todos;
  }

  public deleteTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  public getTodoById(id: number): Todo | undefined {
    const todo = this.todos.find((todo) => todo.id === id);
    return todo;
  }
}
