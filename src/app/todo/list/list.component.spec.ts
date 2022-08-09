import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ItemComponent } from '../item/item.component';
import { Todo } from '../models/todo/todo';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let debugElement: DebugElement;
  const todos = [new Todo(1, 'One'), new Todo(2, 'Two')]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ ListComponent, ItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render todo list', () => {
    expect(debugElement.query(By.css('.todos'))).toBeDefined();
  })

  it('should render todo items', () => {
    component.todos = todos;
    fixture.detectChanges();
    const items = debugElement.queryAll(By.css('app-item'));
    expect(items).toBeDefined();
    expect(items.length).toEqual(2);
  })
});
