import { Component, OnInit } from '@angular/core';
import {
  UntypedFormGroup,
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addForm!: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder, private todoService: TodoService, private route: Router) {}

  ngOnInit(): void {
    this.addForm = this.fb.group({ title: ['', Validators.required] });
  }

  public addTodo(): void {
    this.todoService.createTodo(this.addForm.value);
    this.route.navigateByUrl('/todo');
  }
}
