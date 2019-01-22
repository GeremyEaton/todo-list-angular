import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '@core/auth/services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/[0-9a-zA-Z]{6,}/)
      ])
    });
  }

  onSubmit(form: any) {
    const email = form.value.email;
    const password = form.value.password;

    this.authService
      .createNewUser(email, password)
      .then(
        () => this.router.navigate(['/task-list/list']),
        error => this.matSnackBar.open(error, '', { duration: 5000 })
      );
  }
}
