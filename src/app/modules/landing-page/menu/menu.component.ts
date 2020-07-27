import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  eventSubscription: Subscription;
  isChecked = false;

  constructor() { }

  ngOnInit(): void {
    this.eventSubscription = fromEvent(document, "click")
    .subscribe(e => {
      this.isChecked = false;
  });
  }

}
