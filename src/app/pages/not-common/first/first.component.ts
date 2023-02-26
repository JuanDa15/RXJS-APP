import { Component, OnInit } from '@angular/core';
import { first, from } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styles: [
  ]
})
export class FirstComponent {
  public result = null;
  public numbersArr = new Array(100);
  public selected: 'default' | 'more50' | 'under30' | 'isPair' | 'pairMore50';
  public CONDITIONS = {
    default: (val: number) => val,
    more50: (val: number) => val > 50,
    under30: (val: number) => val < 30,
    isPair: (val: number) => (val % 2) === 0,
    pairMore50: (val: number) => this.CONDITIONS['more50'](val) && this.CONDITIONS['isPair'](val)
  }

  constructor() {
    this.selected = 'default';
    this._fillArray();
  }

  private _fillArray(): void {
    for (let index = 0; index < this.numbersArr.length; index++) {
      this.numbersArr[index] = index + 1;
    }
  }

  public start(): void {
    this.result = null;
    from(this.numbersArr).pipe(
      first(this.CONDITIONS[this.selected] as any)
    ).subscribe({
      next: (val) => {
        this.result = val;
      }
    })
  }
}
