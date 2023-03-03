import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, interval, map, Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-take-until',
  templateUrl: './take-until.component.html',
  styles: [
  ]
})
export class TakeUntilComponent implements AfterViewInit, OnDestroy {
  public stop$: Subject<void> = new Subject();
  public results: string[] = [];

  public obs$ = interval(1000).pipe(
    map(val => `Emitted from interval ${val}`)
  )

  constructor() { }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  ngAfterViewInit(): void {
    this.startSubscription();
  }

  reset() {
    this.results = [];
    this.startSubscription();
  }

  startSubscription() {
    this.obs$.pipe(
      takeUntil(this.stop$)
    ).subscribe({
      next: (val) => {
        this.results.push(val);
      }
    })
  }
}
