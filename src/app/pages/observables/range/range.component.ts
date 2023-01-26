import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, range, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-range',
  templateUrl: './range.component.html',
  styles: ['']
})
export class RangeComponent implements OnDestroy {
  public min: FormControl<number | null>;
  public emissions: FormControl<number | null>;
  public src$: null | Observable<number>;
  private _stop$: Subject<void>;
  public results: number[];

  constructor() { 
    this.min = new FormControl<number>(0);
    this.emissions  = new FormControl<number>(0);
    this._stop$  = new Subject();
    this.src$ = null;
    this.results = [];
  }

  ngOnDestroy(): void {
    this._stop$.next();
    this._stop$.complete();
  }

  public startSubscription() {
    this.results = [];
    !this._stop$.closed && this._stop$.complete();
    this.src$ = range(this.min.value!, this.emissions.value!);

    this.src$.pipe(
      takeUntil(this._stop$)
    ).subscribe({
      next: (val) => {
        this.results.push(val);
      }
    })
  }

}
