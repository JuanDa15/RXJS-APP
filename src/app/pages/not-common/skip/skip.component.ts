import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { interval, map, skip, Subscription } from 'rxjs';

@Component({
  selector: 'app-skip',
  templateUrl: './skip.component.html',
  styles: [
  ]
})
export class SkipComponent implements OnInit, OnDestroy {
  public results: string[];
  public subscription: Subscription | null;
  public emissionsNumber: FormControl;
  public src$ = interval(1000).pipe(
    map((val) => `Emitted from src ${val}`)
  );

  constructor() {
    this.subscription = null;
    this.emissionsNumber = new FormControl(null, Validators.required);
    this.results = [];
  }
  ngOnDestroy(): void {
    (!this.subscription?.closed) && this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    // skip()
  }

  start() {
    this.results = [];
    this.subscription = this.src$.pipe(
      skip(this.emissionsNumber.value)
    ).subscribe({
      next: (val) => {
        this.results.push(val);
      }
    })
  }


  stop() {
    this.subscription?.unsubscribe();
  }

}
