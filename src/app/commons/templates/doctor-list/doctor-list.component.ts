import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  cards = [1, 2, 3, 4, 5];

  constructor() { }

  ngOnInit() {
  }

}
