import { Component, OnInit } from '@angular/core';
import {
  Validators,
  UntypedFormGroup,
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
} from '@angular/forms';
import { Observable } from 'rxjs';

interface LoginForm {
  email: FormControl<string>;
  password?: FormControl<string>;
}

interface BlogForm {
  blogTitle: FormControl<string>;
  blogDescription: FormControl<string>;
}

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  formArray: FormArray;
  blogFormGroup: FormGroup;
  blogErrors: {
    [key: string]: string | null;
  } = {
    blogTitle: null,
    blogDescription: null,
  };
  blogFormGroupMsgs: {
    [key: string]: {
      [key: string]: string;
    };
  } = {
    blogTitle: {
      required: 'Blog title is required',
      maxLength: 'Blog title should not be more than 30 char long',
    },
  };

  login = new FormGroup<LoginForm>({
    email: new FormControl('', { nonNullable: true }),
    password: new FormControl('', { nonNullable: true }),
  });

  // blogTitle: FormControl;
  // blogDescription: FormControl;

  constructor(private fb: FormBuilder) {
    this.formArray = new FormArray([new FormControl('')]);
    // this.formArray = this.fb.array();
    // [{city: 'Mumbai', pincode: 400078}, {city: 'Delhi', pincode: 110001}, {city: 'Chennai', pincode: 2100001}]
    this.blogFormGroup = this.fb.group({
      blogTitle: ['', [Validators.required, Validators.maxLength(30)]],
      blogDescription: [
        '',
        [
          Validators.required,
          Validators.minLength(50),
          Validators.maxLength(500),
        ],
      ],
    });
    // this.blogTitle = new FormControl("", [Validators.required, Validators.maxLength(30)]);
    // this.blogDescription = new FormControl("", [Validators.required, Validators.minLength(50), Validators.maxLength(500)]);
    console.log(this.blogFormGroup);

    const formGroups = {
      valueChanges: Observable
    }

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

  get formArrayFields() {
    return this.formArray.controls as Array<FormControl>;
  }

  addNewField() {
    this.formArray.push(new FormControl(''));
  }

  handleFormSubmit(event: any) {
    // console.log(event);
    // event.preventDefault();
    // alert('Form submitted');
    // console.log('form values', this.blogTitle.value, this.blogDescription.value);
    console.log('form values', this.blogFormGroup.value);
    console.log('form array values', this.formArray.value);
  }
}
