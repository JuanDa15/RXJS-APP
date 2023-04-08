import { Component, OnInit } from '@angular/core';
import { concat, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styles: [
  ]
})
export class ConcatComponent implements OnInit {
  public emissions: number[] = [];
  constructor() { }

  ngOnInit(): void {
    concat(
      of(1, 2, 3),
      // subscribed after first completes
      of(4, 5, 6),
      // subscribed after second completes
      of(7, 8, 9)
    )
      // log: 1, 2, 3, 4, 5, 6, 7, 8, 9
      .subscribe({
        next: (val) => {
          this.emissions.push(val)
        }
      });
  }

}
