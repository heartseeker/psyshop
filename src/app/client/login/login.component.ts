import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/client/auth.service';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  email: string;
  password: string;

  ngOnInit() {
    this.initForm();
  }

  constructor(
    public auth: AuthService,
    public fb: FormBuilder
  ) {}

  initForm() {
    this.form = this.fb.group({
      email: [],
      password: []
    });

  }

  signup() {
    this.auth.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login() {
    this.email = this.form.controls['email'].value;
    this.password = this.form.controls['password'].value;

    this.auth.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout() {
    this.auth.logout();
  }

}
