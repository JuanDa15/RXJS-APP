import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, pluck, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styles: [
  ]
})
export class ProgressBarComponent implements OnInit, OnDestroy {
  public stop$: Subject<void>;
  public progress: string;

  constructor() {
    this.stop$ = new Subject();
    this.progress = '0%';
  }

  ngOnDestroy(): void {
    this.stop$.next();
    this.stop$.complete();
  }

  ngOnInit(): void {
    fromEvent(document, "scroll").pipe(
      takeUntil(this.stop$),
      // scrollingElement: puede ser una alternativa
      pluck('target','documentElement'),
      map((event: any) => {
        const { scrollTop, scrollHeight, clientHeight} = event as HTMLHtmlElement;
        return this._calculatePercentaje({
          scrollTop,
          scrollHeight,
          clientHeight
        })
      })
    ).subscribe({
      next: (progress) => {
        this.progress = `${progress}%`;
      }
    })
  }

  private _calculatePercentaje({
    scrollTop,
    scrollHeight,
    clientHeight
  }: any) : number {
    return Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
  }

}
