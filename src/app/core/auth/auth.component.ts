import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '<app-signin></app-signin><hr><app-signup></app-signup>',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  constructor() {}
}
