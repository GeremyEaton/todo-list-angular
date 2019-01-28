import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: firebase.User;
  private _auth = new Subject();
  auth$ = this._auth.asObservable();

  public redirectUrl: string;
  public isLogged: boolean = false;

  constructor(
    private fireAuth: AngularFireAuth,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    fireAuth.authState.subscribe(auth => {
      if (!auth) {
        this.router.navigate(['']);
      }

      if (auth) {
        this.user = auth;
        this.isLogged = true;
        if (this.redirectUrl) {
          this.router.navigate([this.redirectUrl]);
        } else {
          this.router.navigate(['dashboard']);
        }
      }
      this._auth.next(auth);
    });
  }

  createNewUser(_email: string, _password: string) {
    this.fireAuth.auth
      .createUserWithEmailAndPassword(_email, _password)
      .then(result => {
        if (result.user) {
          this.router.navigate([this.redirectUrl]);
        }
      })
      .catch(error =>
        this.matSnackBar.open(error.message, '', { duration: 5000 })
      );
  }

  signInUser(_email: string, _password: string) {
    this.fireAuth.auth
      .signInWithEmailAndPassword(_email, _password)
      .then(result => {
        if (result.user) {
          this.router.navigate([this.redirectUrl]);
        }
      })
      .catch(error =>
        this.matSnackBar.open(error.message, '', { duration: 5000 })
      );
  }

  signOutUser() {
    this.fireAuth.auth.signOut();
    this.user = null;
    this.router.navigate(['auth']);
  }

  getUser() {
    return this.user;
  }

  getUserId() {
    return this.user.uid;
  }
  getUserMail() {
    return this.user.email;
  }
}
