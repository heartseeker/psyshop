import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  months = [
     { label: 'Jan', value: 1 },
     { label: 'Feb', value: 2 },
     { label: 'Mar', value: 3 },
     { label: 'Apr', value: 4 },
     { label: 'May', value: 5 },
     { label: 'Jun', value: 6 },
     { label: 'Jul', value: 7 },
     { label: 'Aug', value: 8 },
     { label: 'Sep', value: 9 },
     { label: 'Oct', value: 10 },
     { label: 'Nov', value: 11 },
     { label: 'Dec', value: 12 },
  ];

  days;

  constructor() { }

  ngOnInit() {
    const numberOfdays = this.getDaysInMonth(1, (new Date()).getFullYear());
    this.days = Array.from({length: numberOfdays}, (x, i) => i + 1);
  }

  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }

}
