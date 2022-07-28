import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Create a Blog";
  blogTitle: string = 'Init value';
  blogDescription: string = '';

  handleFormSubmit(str: string) {
    // alert('Form submitted');
    console.log('form values', str, this.blogTitle, this.blogDescription);
  }
}
