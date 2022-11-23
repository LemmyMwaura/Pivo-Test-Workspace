import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private _afAuth: AngularFireAuth,
    private _afs: AngularFirestore
  ) {}

  public isLoggedIn() {
    return true
  }

  public createUserWithEmailAndPassword(
    displayName: string,
    email: string,
    password: string
  ) {
    return this._afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        return res.user;
      })
      .catch((error) => {
        this._throwError(error);
      });
  }

  private _throwError(error: any) {
    console.log(error.message);
  }
}
