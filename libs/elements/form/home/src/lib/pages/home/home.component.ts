import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '@pivo-test-workspace/features/auth';

//tooltips
import { faUser } from '@fortawesome/free-regular-svg-icons';
@Component({
  selector: 'pivo-test-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userName$;
  userIcon = faUser

  constructor(
    private _authService: AuthService,
    private _store: Store<{ user: any }>
  ) {
    this.userName$ = this._store.select((state) => state.user.displayName);
  }

  logOut() {
    this._authService.logOut();
  }
}
