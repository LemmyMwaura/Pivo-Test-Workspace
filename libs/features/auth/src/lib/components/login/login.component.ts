import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'pivo-test-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  accountForm!:FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  getUser = () => "assets/images/User.png"

  getLock = () => "assets/images/Lock.png"

  loginFormGroup() {
    this.accountForm = this._formBuilder.group({
      name: ['', Validators.required, Validators.minLength(4)],
      password: ['', Validators.required, Validators.minLength(6)]
    })
  }

  onSubmit(){
    console.log(this.accountForm.value)
  }

  ngOnInit(): void {
    this.loginFormGroup()
  }
}
