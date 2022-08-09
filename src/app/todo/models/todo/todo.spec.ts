import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo(1, 'Title')).toBeTruthy();
  });

  it(`should have 'isCompleted' as false`, () => {
    const todo = new Todo(1, 'Title');
    expect(todo.isCompleted).toBeFalse();
  });
});
