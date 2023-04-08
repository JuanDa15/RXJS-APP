import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, scan } from 'rxjs';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styles: [
  ]
})
export class ScanComponent {

  public result: number | null;
  public emission: number[];
  public numbersArr: FormControl<string>;

  public accumulatorFn = ( acumulador: number, current: number) => {
    return acumulador + current * 2
  }

  constructor() {
    this.numbersArr = new FormControl();
    this.result = null;
    this.emission = [];
  }

  public start(): void {
    this.emission = [];
    this.result = null;
    let new_arr: number[] | string[] = this.numbersArr.value.split(',');
    new_arr = new_arr.map(val => Number(val))
    from(new_arr).pipe(
      scan(this.accumulatorFn, 0)
    ).subscribe({
      next:(val) => {
        this.emission.push(val);
        this.result = val;
      }
    })
  }

  public reset(): void {
    this.emission = [];
    this.numbersArr.reset();
    this.result = 0;
  }
}
