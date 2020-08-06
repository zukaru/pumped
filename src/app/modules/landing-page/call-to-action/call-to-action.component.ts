import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-to-action',
  templateUrl: './call-to-action.component.html',
  styleUrls: ['./call-to-action.component.scss']
})
export class CallToActionComponent implements OnInit {
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  

   days: number;
   hours: number;
   minutes: number;
   seconds: number;

  

  constructor() {
    
   }

  ngOnInit(): void {
    setInterval(this.showRemaining.bind(this), 1000)
  }

  showRemaining() {
    let now = new Date().getTime();
    let end = new Date('Jun 21, 2021 12:00:00').getTime()
    let distance = end - now;
    this.days = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }

}
