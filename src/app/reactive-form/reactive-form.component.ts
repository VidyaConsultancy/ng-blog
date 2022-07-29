import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, Validators, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  blogFormGroup: UntypedFormGroup;
  blogErrors: {
    [key: string]: string | null;
  } = {
    blogTitle: null,
    blogDescription: null,
  };
  blogFormGroupMsgs: {
    [key: string]: {
      [key: string]: string
    }
  } = {
    blogTitle: {
      required: 'Blog title is required',
      maxLength: 'Blog title should not be more than 30 char long'
    },
  };
  // blogTitle: FormControl;
  // blogDescription: FormControl;

  constructor() {
    this.blogFormGroup = new UntypedFormGroup({
      blogTitle: new UntypedFormControl('', [
        Validators.required,
        Validators.maxLength(30),
      ]),
      blogDescription: new UntypedFormControl('', [
        Validators.required,
        Validators.minLength(50),
        Validators.maxLength(500),
      ]),
    });
    // this.blogTitle = new FormControl("", [Validators.required, Validators.maxLength(30)]);
    // this.blogDescription = new FormControl("", [Validators.required, Validators.minLength(50), Validators.maxLength(500)]);
    console.log(this.blogFormGroup);

    this.blogFormGroup.valueChanges.subscribe(() => {
      const controls = this.blogFormGroup.controls;
      for (const key in controls) {
        if (controls[key].dirty && controls[key].touched) {
          const errors = controls[key].errors;
          if (errors) {
            for (const validationKey in errors) {
              this.blogErrors[key] = this.blogFormGroupMsgs[key][validationKey];
            }
          }
        }
      }
    });

    // this.blogTitle.valueChanges.subscribe(value => {
    //   console.log(value, this.blogTitle)
    // })
  }

  ngOnInit(): void {}

  handleFormSubmit(event: any) {
    // console.log(event);
    // event.preventDefault();
    // alert('Form submitted');
    // console.log('form values', this.blogTitle.value, this.blogDescription.value);
    console.log('form values', this.blogFormGroup.value);
  }
}
