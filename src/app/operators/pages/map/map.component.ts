import { Component, OnInit } from '@angular/core';
import { delay, map, Observable, range, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [
  ]
})
export class MapComponent implements OnInit {

  public originalArr: number[];
  public mappedArr: number[];
  public src$: Observable<number>;
  public sub: Subscription | null;

  constructor() {
    this.mappedArr = [];
    this.originalArr = [];
    this.sub = null;
    this.src$ = range(1,10).pipe(
      map<number, number>( val => {
        this.originalArr.push(val);
        return val * 10
      })
    )
  }

  ngOnInit(): void {

  }

  public start() {
    this.originalArr = [];
    this.mappedArr = [];
    this.sub = this.src$.subscribe({
      next: (val) => {
        this.mappedArr.push(val);
      },
      complete: () => {
        this.sub?.unsubscribe();
      }
    });
  }

}
