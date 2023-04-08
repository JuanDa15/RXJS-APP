import { Component, OnInit } from '@angular/core';
import { of, startWith } from 'rxjs';

@Component({
  selector: 'app-start-with',
  templateUrl: './start-with.component.html',
  styles: [
  ]
})
export class StartWithComponent implements OnInit {

  public numeros$ = of(1,2,3,4,5,6,7)
  public emisions: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.numeros$.pipe(
      startWith(0)
    ).subscribe({
      next: (val) => {
        this.emisions.push(val);
      }
    })
  }

}
