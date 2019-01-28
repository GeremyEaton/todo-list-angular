import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/auth/services/auth.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {
  isLogged: boolean;
  userMail: string;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.auth$.subscribe(result => {
      if (result) {
        return (this.isLogged = true, this.userMail = this.authService.getUserMail());
      }

      return (this.isLogged = false, this.userMail = '');
    });
  }

  logOut() {
    this.authService.signOutUser();
  }
}
