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
        setTimeout(() => {
          this._modal.emitMessage('Welcome Back');
        }, 100)
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
          this._router.navigate(['/home']);
          setTimeout(() => {
            this._modal.emitMessage('Account Created, Welcome');
          }, 100)
        });
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  private authStateListener() {
    onAuthStateChanged(this._afAuth, (user) => {
      if (user) {
        this._store.dispatch(
          userActions.loginSuccess({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            isLoggedIn: true,
          })
        );
      } else {
        this._store.dispatch(userActions.logoutSuccess());
      }
    });
  }

  public logOut() {
    signOut(this._afAuth);
    this._router.navigate(['/auth/login']);
    setTimeout(() => {
      this._modal.emitMessage('Successfuly Logged Out');
    }, 100)
  }

  private _throwError(error: any) {
    this._modal.emitMessage(error.message)
  }

  ngOnDestroy() {
    this.userIsLoggedIn$.unsubscribe();
  }
}
