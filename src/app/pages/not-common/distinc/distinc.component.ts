import { Component, OnInit } from '@angular/core';
import { distinct, from } from 'rxjs';

@Component({
  selector: 'app-distinc',
  templateUrl: './distinc.component.html',
  styles: [
  ]
})
export class DistincComponent implements OnInit {

  public arr = [1,2,3,4,5,1,2,1,1,1,3,4,5,6,7,9,7,5,9,0]
  constructor() { }

  ngOnInit(): void {
    from(this.arr).pipe(
      distinct()
    ).subscribe({
      next: (val) => {
        console.log(val)
      }
    })
  }

}
