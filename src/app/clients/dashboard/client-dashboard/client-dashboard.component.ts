import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.scss']
})
export class ClientDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  book() {
    this.router.navigate(['/clients/scheduling']);
  }

}
