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
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.authService.auth$.subscribe(result => {
      if (result) {
        return (this.isLogged = true);
      }

      return (this.isLogged = false);
    });
  }

  logOut() {
    this.authService.signOutUser();
  }
}
