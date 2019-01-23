import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  template: `
    <app-main-nav> <router-outlet></router-outlet> </app-main-nav>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    firebase.initializeApp(environment.firebase);
  }
}
