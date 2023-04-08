import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { from, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styles: [
  ]
})
export class TakeComponent {

  public numbersArr = new Array(100);
  public emissionsNumber: FormControl;
  public emissionsArr: number[];
  constructor() {
    this.emissionsArr = [];
    this._fillArray();
    this.emissionsNumber = new FormControl(0, [Validators.required])
  }

  private _fillArray(): void {
    for (let index = 0; index < this.numbersArr.length; index++) {
      this.numbersArr[index] = index;
    }
  }

  public start(): void {
    if (this.emissionsNumber.invalid) {
      return;
    }
    this.emissionsArr = [];
    from(this.numbersArr).pipe(
      take(this.emissionsNumber.value)
    ).subscribe({
      next: (val) => {
        this.emissionsArr.push(val)
      }
    })
  }
}
