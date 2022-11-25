import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth.service';

//tooltips
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'pivo-test-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

  userIcon = faUser;
  lockIcon = faLock;
  emailIcon = faEnvelope;

  loginFormGroup() {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    const user = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this._authService.signIn(user.email, user.password)
  }

  ngOnInit(): void {
    this.loginFormGroup();
  }
}
