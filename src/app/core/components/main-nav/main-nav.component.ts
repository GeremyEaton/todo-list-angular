import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/services/auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  isAuth: boolean;

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        return (this.isAuth = false);
      }
      return (this.isAuth = true);
    });
  }

  signOutUser() {
    this.authService.signOutUser();
    this.router.navigate(['/auth']);
  }
}
