import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username = '';
  password = '';
  errorMessage = 'Invalid credentials !';
  invalidLogin = false;

  constructor(private router: Router) { }

  handleLogin() {
    if (this.username === "majed" && this.password === "1234") {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username])
    }
    else {
      this.invalidLogin = true;
    }
  }

}
