import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
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
export class HomeComponent implements OnDestroy {
  userName$;
  userIcon = faUser;
  message: string | null = null;
  messageSub$: Subscription;

  constructor(
    private _authService: AuthService,
    private _modal: ShowModalService,
    private _store: Store<{ user: any }>
  ) {
    this.messageSub$ = this._modal.messageToEmit.subscribe((data) => {
      this.message = data;
    });
    this.userName$ = this._store.select((state) => state.user.displayName);
  }

  logOut() {
    this._authService.logOut();
  }

  ngOnDestroy() {
    this.messageSub$.unsubscribe();
  }
}
