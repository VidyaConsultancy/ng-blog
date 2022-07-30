import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

class CUser implements IUser {
  name: string;
  email: string;
  password: string;

  constructor(name: string = '', email: string = '', passsword: string = '') {
    this.name = name;
    this.email = email;
    this.password = passsword;
  }
}

interface IUser {
  name: string;
  email: string;
  password: string;
}
type User = {
    name: string,
    email: string,
    password: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Create a Blog';
  blogTitle: string = 'Init value';
  blogDescription: string = '';
  user: CUser = new CUser('John Doe', 'johndoe@mailinator.com', '123456');
  observerable: Observable<number>;

  ngOnInit() {
    this.observerable = new Observable((subscriber) => {
      subscriber.next(10);
      subscriber.next(20);
      subscriber.next(30);
      subscriber.next(40);
      setTimeout(() => {
        subscriber.next(50);
      }, 1000);
      subscriber.next(60);
    });
    this.observerable.subscribe((value) => {
      console.log(`Sub`, value);
    });
  }

  handleFormSubmit(event: any) {
    console.log(event);
    event.preventDefault();
    // alert('Form submitted');
    console.log('form values', this.blogTitle, this.blogDescription, this.user);
  }

  onSubscribe() {
    this.observerable.subscribe((value) => {
      console.log('Sub2', value);
    })
  }
}
