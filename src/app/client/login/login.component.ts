import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/client/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  ngOnInit() {
  }

  constructor(public auth: AuthService) {}

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.auth.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.auth.logout();
  }

}
