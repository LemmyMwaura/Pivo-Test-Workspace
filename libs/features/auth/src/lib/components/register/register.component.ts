import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../providers/auth.service';

// icons
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'pivo-test-workspace-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService
  ) {}

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
    const user = {
      name: this.registerForm.value.name,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
    };

    this._authService.createAccount(user.name, user.email, user.password);
  }

  ngOnInit(): void {
    this.registerFormGroup();
  }
}
