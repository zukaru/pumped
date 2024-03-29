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
  public innerHeight: number;

  @ViewChild('itemOne') elOne: ElementRef;
  @ViewChild('itemTwo') elTwo: ElementRef;
  @ViewChild('itemThree') elThree: ElementRef;

  @HostListener('window:resize', ['$event'])
    onResize() {
    this.innerHeight = window.innerWidth;
}

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
    this.eventSubscription = fromEvent(document, "scroll", {passive: true})
    .pipe(throttleTime(100))
    .subscribe(e => {
      this.animateOnScroll(this.elOne);
      this.animateOnScroll(this.elTwo);
      this.animateOnScroll(this.elThree);
    })
  }

  animateOnScroll(el: ElementRef) {
    let introPosition = el.nativeElement.getBoundingClientRect().top;

    

    if(this.innerHeight > 800) {
      if(introPosition < this.innerHeight) {
        this.renderer.setStyle(el.nativeElement, 'opacity', 1);
        this.renderer.setStyle(el.nativeElement, 'transform', 'scale(1) translateY(0)');
      } else if(introPosition > this.innerHeight - 200) {
        
        this.renderer.removeStyle(el.nativeElement, 'opacity');
        this.renderer.removeStyle(el.nativeElement, 'transform',);
      }
    } else if(introPosition < this.innerHeight + 200) {
      this.renderer.setStyle(el.nativeElement, 'opacity', 1);
      this.renderer.setStyle(el.nativeElement, 'transform', 'scale(1) translateY(0)');
    } else if(introPosition > this.innerHeight + 200) {
      this.renderer.removeStyle(el.nativeElement, 'opacity');
      this.renderer.removeStyle(el.nativeElement, 'transform');
    }

  }


}
