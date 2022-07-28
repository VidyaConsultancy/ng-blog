import { Component } from '@angular/core';

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
export class AppComponent {
  title = 'Create a Blog';
  blogTitle: string = 'Init value';
  blogDescription: string = '';
  user: CUser = new CUser('John Doe', 'johndoe@mailinator.com', '123456');

  handleFormSubmit(event: any) {
    console.log(event);
    event.preventDefault();
    // alert('Form submitted');
    console.log('form values', this.blogTitle, this.blogDescription, this.user);
  }
}
