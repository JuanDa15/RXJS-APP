import { Component, OnInit } from '@angular/core';
import { endWith, of } from 'rxjs';

@Component({
  selector: 'app-end-with',
  templateUrl: './end-with.component.html',
  styles: [
  ]
})
export class EndWithComponent implements OnInit {
  public numbers$ = of(1,2,3,4,5,6)
  public emisions: number[] = [];
  constructor() { }

  ngOnInit(): void {
    this.numbers$.pipe(endWith(7)).subscribe({
      next: (val) => {
        this.emisions.push(val);
      }
    })
  }

}
