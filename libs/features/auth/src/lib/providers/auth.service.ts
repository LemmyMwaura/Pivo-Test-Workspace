import { Injectable, Optional } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  signOut,
  updateProfile,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from '@angular/fire/auth';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected userIsLoggedIn = false;

  constructor(@Optional() private _afAuth: Auth, private _router: Router) {}

  public isLoggedIn() {
    return this.userIsLoggedIn;
  }

  public async signIn(email: string, password: string) {
    return await signInWithEmailAndPassword(this._afAuth, email, password)
      .then(() => {
        this._router.navigate(['/home']);
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
        });
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  public logOut() {
    signOut(this._afAuth);
    this._router.navigate(['/auth/login']);
  }

  private _throwError(error: any) {
    console.log(error.message);
  }
}
