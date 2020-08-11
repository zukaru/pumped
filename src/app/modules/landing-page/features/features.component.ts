import { Component, OnInit, ElementRef, ViewChild, HostListener, Renderer2 } from '@angular/core';
import { Subscription, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  eventSubscription: Subscription
  public innerWidth: number;

  @ViewChild('itemOne') elOne: ElementRef;
  @ViewChild('itemTwo') elTwo: ElementRef;
  @ViewChild('itemThree') elThree: ElementRef;

  @HostListener('window:resize', ['$event'])
    onResize() {
    this.innerWidth = window.innerWidth;
}

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.eventSubscription = fromEvent(document, "scroll", {passive: true})
    .pipe(throttleTime(200))
    .subscribe(e => {
      this.animateOnScroll(this.elOne);
      this.animateOnScroll(this.elTwo);
      this.animateOnScroll(this.elThree);
    })
  }

  animateOnScroll(el: ElementRef) {
    let introPosition = el.nativeElement.getBoundingClientRect().top;

    if(this.innerWidth > 800) {
      if(introPosition < this.innerWidth / 2) {
        this.renderer.setStyle(el.nativeElement, 'opacity', 1);
        this.renderer.setStyle(el.nativeElement, 'transform', 'translateX(0)');
      } else if(introPosition > this.innerWidth / 2) {
        
        this.renderer.removeStyle(el.nativeElement, 'opacity');
        this.renderer.removeStyle(el.nativeElement, 'transform');
      }
    } else if(introPosition < this.innerWidth + 200) {
      this.renderer.setStyle(el.nativeElement, 'opacity', 1);
      this.renderer.setStyle(el.nativeElement, 'transform', 'translateX(0)');
    } else if(introPosition > this.innerWidth + 200) {
      this.renderer.removeStyle(el.nativeElement, 'opacity');
      this.renderer.removeStyle(el.nativeElement, 'transform');
    }

  }


}
