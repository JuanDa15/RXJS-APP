import { Component, OnInit } from '@angular/core';
import { distinct, from, tap } from 'rxjs';

@Component({
  selector: 'app-distinc',
  templateUrl: './distinc.component.html',
  styles: [
  ]
})
export class DistincComponent implements OnInit {

  public arr = [1,2,3,4,5,11,2,1,1,1,3,4,5,6,7,9,7,5,9,0]
  public normalEmissions: number[] = [];
  public distincEmissions: number[] = [];

  constructor() { }

  ngOnInit(): void {
    from(this.arr).pipe(
      tap(val => this.normalEmissions.push(val)),
      distinct()
    ).subscribe({
      next: (val) => {
        this.distincEmissions.push(val)
      }
    })
  }

}
