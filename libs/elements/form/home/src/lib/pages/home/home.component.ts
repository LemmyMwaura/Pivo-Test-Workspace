import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AuthService,
  ShowModalService,
} from '@pivo-test-workspace/features/auth';

//tooltips
import { faUser } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'pivo-test-workspace-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  userName$;
  userIcon = faUser;
  messageSub$: Observable<string | null>;
  @Input() message!: string | null;

  constructor(
    private _authService: AuthService,
    private _modal: ShowModalService,
    private _store: Store<{ user: any }>
  ) {
    this.userName$ = this._store.select((state) => state.user.displayName);
    this.messageSub$ = this._modal.messageToEmit;
  }

  logOut() {
    this._authService.logOut();
  }
}
