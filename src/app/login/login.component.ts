import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../service/hardcoded-auth.service';

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

  constructor(private router: Router, private HardcodedAuthService: HardcodedAuthService) { }

  handleLogin() {
    if (this.HardcodedAuthService.authenticate(this.username, this.password)) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username])
    }
    else {
      this.invalidLogin = true;
    }
  }

}
