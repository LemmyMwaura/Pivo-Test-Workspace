import { Component } from '@angular/core';
import { AuthService } from '@pivo-test-workspace/features/auth';
@Component({
  selector: 'form-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'form-to-code';

  constructor(private _authService: AuthService){
    this._authService.authStateListener()
  }
}
