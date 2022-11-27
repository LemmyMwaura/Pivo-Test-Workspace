import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  AuthService,
  ShowModalService,
} from '@pivo-test-workspace/features/auth';
import { AppState, Message } from '@pivo-test-workspace/models';

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
  messageSub$: Observable<Message>;
  message!: Message;

  constructor(
    private _authService: AuthService,
    private _modal: ShowModalService,
    private _store: Store<AppState>
  ) {
    this.userName$ = this._store.select((state) => state.user.displayName);
    this.messageSub$ = this._modal.messageToEmit;
  }

  logOut() {
    this._authService.logOut();
  }
}
