import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoService } from 'src/app/todo/services/todo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  msg!: string;

  constructor(private todoService: TodoService) {
    this.todoService.getMessage().subscribe((msg) => (this.msg = msg));
  }

  ngOnInit(): void {}

  setMessage() {
    this.todoService.setMessage('Hola from the navbar');
  }
}
