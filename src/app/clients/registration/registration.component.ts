import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      fullname: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      question1: ['', Validators.required]
    });
  }

  finalstep() {
    this.router.navigate(['/']);
  }
}
