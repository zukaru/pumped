import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const base = Observable.create((observer)=>{
  
      fetch('https://api.exchangerate-api.com/v4/latest/USD')
      .then(resp => resp.json())
      .then(data => {observer.next(data)})
    })
    .pipe(map((v: any) => {
      return v.rates;
    }))
    
    
    base
        .subscribe(
           v => console.log(v),
          err => console.log(err),
          done => console.log("completed")
        )
  }

}
