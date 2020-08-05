import { Component, OnInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  eventSubscription: Subscription;
  elOpacity = '0'

  constructor() { }

  ngOnInit(): void {
    this.eventSubscription = fromEvent(document, "scroll", {passive: true})
    .subscribe(e => {
      (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) ?
        this.elOpacity = '1' : this.elOpacity = '0';
        
        
  });
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

}
