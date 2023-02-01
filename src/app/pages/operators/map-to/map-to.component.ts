import { Component, OnInit } from '@angular/core';
import { mapTo, Observable, range, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styles: [
  ]
})
export class MapToComponent implements OnInit {

  public results: string[];
  public origin: number[];
  public src$: Observable<number>;
  public subs: Subscription | null;

  constructor() {
    this.results = [];
    this.origin = [];
    this.src$ = range(10,10);
    this.subs = null;
   }

  ngOnInit(): void {
  }

  start() {
    this.origin = [];
    this.results = [];
    this.subs = this.src$.pipe(
      tap(val => this.origin.push(val)),
      mapTo('Hello world')
    ).subscribe({
      next: (val) => {
        this.results.push(val);
      }
    })
  }
}
