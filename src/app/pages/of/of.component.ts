import { Component, OnInit } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OfComponent implements OnInit {

  public observable: Observable<number>;
  public isCompleted: boolean;
  public results: number[];
  
  constructor() { 
    this.observable  = of(1,2,3,4,5,6,7);
    this.results = [];
    this.isCompleted = false;
  }

  ngOnInit(): void {}

  public subscribe(): void {
    this.results = [];
    this.isCompleted = false;
    this.observable.subscribe({
      next: (val) => {
        this.results.push(val);
      },
      complete: () => {
        this.isCompleted = true;
      }
    })

  }

}
