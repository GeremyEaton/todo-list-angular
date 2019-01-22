import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  template: '<app-signin></app-signin><hr><app-signup></app-signup>',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
