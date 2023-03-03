import { Component } from '@angular/core';
import { from, takeWhile } from 'rxjs';

@Component({
  selector: 'app-take-while',
  templateUrl: './take-while.component.html',
  styles: [
  ]
})
export class TakeWhileComponent {
  public resultsArr: number[];
  public numbersArr = new Array(30);
  public selected: 'default' | 'under15' | 'under10';
  public CONDITIONS = {
    default: (val: number) => val,
    under15: (val: number) => val < 15,
    under10: (val: number) => val < 10,
  }

  constructor() {
    this.selected = 'default';
    this.resultsArr = [];
    this._fillArray();
  }

  private _fillArray(): void {
    for (let index = 0; index < this.numbersArr.length; index++) {
      this.numbersArr[index] = index + 1;
    }
  }

  public start(): void {
    this.resultsArr = [];
    from(this.numbersArr).pipe(
      takeWhile(this.CONDITIONS[this.selected] as any, true)
    ).subscribe({
      next: (val) => {
        this.resultsArr.push(val);
      }
    })
  }

}
