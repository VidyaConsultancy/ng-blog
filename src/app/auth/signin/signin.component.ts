import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface SignInForm {
  email: FormControl<string>,
  password: FormControl<string>
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup<SignInForm>;

  constructor(private fb: FormBuilder) {
    this.createSignInForm();
  }

  ngOnInit(): void {}

  createSignInForm() {
    // this.signInForm = this.fb.group<SignInForm>({
    //   email: ['', [Validators.required, Validators.email]] as FormControl<string>,
    //   password: ''
    // });
  }
}
