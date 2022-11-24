import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'pivo-test-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  accountForm!: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  userIcon = faUser;
  lockIcon = faLock;
  emailIcon = faEnvelope;

  loginFormGroup() {
    this.accountForm = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(6)],
    });
  }

  onSubmit() {
    console.log(this.accountForm.value);
  }

  ngOnInit(): void {
    this.loginFormGroup();
  }
}
