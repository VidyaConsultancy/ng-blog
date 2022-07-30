import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from '../todo/services/todo.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {
  msg$: Observable<string>;
  msg: string = '';

  constructor(private todoService: TodoService) {
    this.msg$ = this.todoService.getMessage();
  }

  ngOnInit(): void {
  }

  setMessage() {
    this.todoService.setMessage(this.msg);
  }

}
