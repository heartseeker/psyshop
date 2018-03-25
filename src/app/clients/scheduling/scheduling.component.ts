import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-scheduling',
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent implements OnInit {

  search = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  book() {
    this.router.navigate(['/clients/book-confirmation']);
  }
}
