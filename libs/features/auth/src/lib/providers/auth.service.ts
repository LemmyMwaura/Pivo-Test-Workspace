import { Injectable, Optional, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { userActions } from '../store/actions/user.actions';

import {
  Auth,
  signOut,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

import { ShowModalService } from './show-modal.service';

interface User {
  uid: string;
  email: string;
  displayName?: string;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  protected userIsLoggedIn$!: Subscription;

  constructor(
    @Optional() private _afAuth: Auth,
    private _store: Store<{ user: User }>,
    private _router: Router,
    private _modal: ShowModalService
  ) {
    this.authStateListener();
  }

  public isLoggedIn() {
    this.userIsLoggedIn$ = this._store
      .select((state) => state.user.isLoggedIn)
      .subscribe();

    return this.userIsLoggedIn$;
  }

  public async signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(this._afAuth, email, password)
      .then(() => {
        this._router.navigate(['/home']);
        this._sendMessage('Welcome Back');
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  public async createAccount(
    displayName: string,
    email: string,
    password: string
  ) {
    return await createUserWithEmailAndPassword(this._afAuth, email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: displayName,
        }).then(() => {
          this._updateState(res.user.uid, res.user.email, displayName);
          this._router.navigate(['/home']);
          this._sendMessage(`Account Created, Welcome ${displayName}`);
        });
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  private authStateListener() {
    onAuthStateChanged(this._afAuth, (user) => {
      if (user) {
        this._updateState(user.uid, user.email, user.displayName);
      } else {
        this._store.dispatch(userActions.logoutSuccess());
      }
    });
  }

  public logOut() {
    signOut(this._afAuth);
    this._router.navigate(['/auth/login']);
    this._sendMessage('Successfuly Logged Out');
  }

  private _updateState(id: string, email: string | null, name: string | null) {
    this._store.dispatch(
      userActions.loginSuccess({
        uid: id,
        email: email,
        displayName: name,
        isLoggedIn: true,
      })
    );
  }

  private _throwError(error: any) {
    this._modal.emitMessage(error.message);
  }

  private _sendMessage(message: string) {
    setTimeout(() => {
      this._modal.emitMessage(message);
    }, 0);
  }

  ngOnDestroy() {
    this.userIsLoggedIn$.unsubscribe();
  }
}
