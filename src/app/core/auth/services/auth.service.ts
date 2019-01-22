import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connected: boolean;

  constructor() {}

  createNewUser(_email: string, _password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(_email, _password)
        .then(() => resolve(), error => reject(error));
    });
  }
  signInUser(_email: string, _password: string) {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(_email, _password)
        .then(() => resolve(), error => reject(error));
    });
  }

  signOutUser() {
    firebase.auth().signOut();
  }
}
