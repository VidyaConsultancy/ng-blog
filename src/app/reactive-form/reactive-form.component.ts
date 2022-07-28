import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  blogTitle: FormControl;
  blogDescription: FormControl;

  constructor() {
    this.blogTitle = new FormControl("", [Validators.required, Validators.maxLength(30)]);
    this.blogDescription = new FormControl("", [Validators.required, Validators.minLength(50), Validators.maxLength(500)]);
    console.log(this.blogTitle)

    this.blogTitle.valueChanges.subscribe(value => {
      console.log(value, this.blogTitle)
    })
  }

  ngOnInit(): void {}

  handleFormSubmit(event: any) {
    console.log(event);
    event.preventDefault();
    // alert('Form submitted');
    console.log('form values', this.blogTitle.value, this.blogDescription.value);
  }
}
