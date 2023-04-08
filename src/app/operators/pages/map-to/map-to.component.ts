import { Component, OnDestroy, OnInit } from '@angular/core';
import { mapTo, Observable, range, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-map-to',
  templateUrl: './map-to.component.html',
  styles: [
  ]
})
export class MapToComponent implements OnDestroy {

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
  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }

  start() {
    (!this.subs?.closed) && this.subs?.unsubscribe();
    this.origin = [];
    this.results = [];

    setTimeout(() => {
      this.subs = this.src$.pipe(
        tap(val => this.origin.push(val)),
        mapTo('Hello world')
      ).subscribe({
        next: (val) => {
          this.results.push(val);
        }
      })
    }, 1000)
  }
}
