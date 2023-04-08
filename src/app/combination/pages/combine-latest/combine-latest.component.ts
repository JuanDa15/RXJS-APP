import { Component, OnInit } from '@angular/core';
import { combineLatest, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styles: [
  ]
})
export class CombineLatestComponent implements OnInit {
  public emissions: string[] = [];
  constructor() { }

  ngOnInit(): void {

// timerOne emits first value at 1s, then once every 4s
const timerOne$ = timer(1000, 4000);
// timerTwo emits first value at 2s, then once every 4s
const timerTwo$ = timer(2000, 4000);
// timerThree emits first value at 3s, then once every 4s
const timerThree$ = timer(3000, 4000);

// when one timer emits, emit the latest values from each timer as an array
combineLatest([timerOne$, timerTwo$, timerThree$]).
pipe(
  takeUntil(timer(10000))
).subscribe(
  ([timerValOne, timerValTwo, timerValThree]) => {
    this.emissions.push( `Timer One Latest: ${timerValOne},
    Timer Two Latest: ${timerValTwo},
    Timer Three Latest: ${timerValThree}`)
  }
);
  }

}
