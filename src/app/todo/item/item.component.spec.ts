import { Location } from '@angular/common';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { DetailComponent } from '../detail/detail.component';
import { Todo } from '../models/todo/todo';

import { ItemComponent } from './item.component';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;
  const todo = new Todo(1, 'Title');

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {
            path: 'todo/:id',
            component: DetailComponent,
          },
        ]),
      ],
      declarations: [ItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render todo item', () => {
    const debugElement = fixture.debugElement;
    component.todo = todo;
    fixture.detectChanges();
    expect(debugElement.query(By.css('h4'))).toBeDefined();
    expect(debugElement.query(By.css('h4')).nativeElement.innerText).toEqual(
      todo.title
    );
    expect(debugElement.query(By.css('span')).nativeElement.innerText).toEqual(
      'Pending'
    );
  });

  it('should invoke deleteTodo method', () => {
    const debugElement = fixture.debugElement;
    component.todo = todo;
    fixture.detectChanges();
    const spy = spyOn(component, 'deleteTodo');
    const btn = debugElement.query(By.css('button'));
    btn.triggerEventHandler('click');
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should emit onDelete event with todo id', () => {
    const debugElement = fixture.debugElement;
    component.todo = todo;
    fixture.detectChanges();
    const spy = spyOn(component.onDeleteTodo, 'emit');
    component.deleteTodo();
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(todo.id);
  });

  it('should navigate to todo detail page', fakeAsync(() => {
    const debugElement = fixture.debugElement;
    component.todo = todo;
    const location: Location = TestBed.inject(Location);
    fixture.detectChanges();
    component.handleTodoView();
    tick(100);
    expect(location.path()).toEqual(`/todo/${todo.id}`);
  }));
});
