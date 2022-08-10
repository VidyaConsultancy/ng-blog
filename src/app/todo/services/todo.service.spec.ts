import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { TodoMockService } from './todo-mock.service';
import { environment } from '../../../environments/environment';
import { TodoService } from "./todo.service";
import { Todo } from "../models/todo/todo";

describe('TodoService<Mock>', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: TodoService, useClass: TodoMockService }
      ]
    });
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todos data', () => {
    service.fetchAllTodosData().subscribe((todos) => {
      expect(todos.length).toBe(2)
      expect(todos[0].id).toEqual(1);
      expect(todos[0].title).toEqual('One');
      expect(todos[1].id).toEqual(2);
      expect(todos[1].title).toEqual('Two');
    })
  })

  it('should get todo by id', () => {
    service.getTodoById(1).subscribe((todo) => {
      expect(todo.id).toBe(1);
    });
  });
});

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let baseUrl = environment.baseAPIUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TodoService);
  });

  it('should fetch all todos', () => {
    let result: Todo[];
    service.fetchAllTodosData().subscribe((t) => {
      result = t;
    });

    const mockReq = httpMock.expectOne({
      method: 'GET',
      url: baseUrl + '/todos',
    });

    // mockReq.flush(result);

    // expect(result.data).toEqual(user);
    expect(mockReq.cancelled).toBeFalsy();
    expect(mockReq.request.responseType).toEqual('json');
    httpMock.verify();
  });
});
