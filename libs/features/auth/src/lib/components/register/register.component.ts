import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'pivo-test-workspace-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  userIcon = faUser;
  lockIcon = faLock;
  emailIcon = faEnvelope;

  registerFormGroup() {
    this.registerForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  ngOnInit(): void {
    this.registerFormGroup();
  }
}
