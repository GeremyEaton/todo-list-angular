import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-main-nav> <router-outlet></router-outlet> </app-main-nav>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
