import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, interval, reduce, take } from 'rxjs';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styles: [
  ]
})
export class ReduceComponent {
  public result: number;
  public numbersArr: FormControl<string>;

  public accumulatorFn = ( acumulador: number, current: number) => {
    return acumulador + current * 2
  }

  constructor() {
    this.numbersArr = new FormControl();
    this.result = 0;
  }

  public start(): void {
    let new_arr: number[] | string[] = this.numbersArr.value.split(',');
    new_arr = new_arr.map(val => Number(val))
    from(new_arr).pipe(
      reduce(this.accumulatorFn, 0)
    ).subscribe({
      next:(val) => {
        this.result = val;
      }
    })
  }

  public reset(): void {
    this.numbersArr.reset();
    this.result = 0;
  }
}
