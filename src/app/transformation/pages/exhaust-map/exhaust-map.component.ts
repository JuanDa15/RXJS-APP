import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, exhaustMap, fromEvent, interval, take } from 'rxjs';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styles: [
  ]
})
export class ExhaustMapComponent implements AfterViewInit {
  @ViewChild('clickArea') area!: ElementRef<HTMLDivElement>;
  public interval$ = interval(500).pipe(take(3));
  public click: any = null;
  public emisionsConcat: string[];
  public emisionsExhaust: string[];
  public observableConcatCount = 0;
  public observableExhaustCount = 0;
  constructor() {
    this.emisionsConcat = [];
    this.emisionsExhaust = [];
   }

  ngAfterViewInit(): void {
    this.click = fromEvent(this.area.nativeElement, 'click');
    this.click.pipe(
      concatMap( () => {
        this.observableConcatCount += 1
        return this.interval$
      })
    ).subscribe({
      next: (val: any) => {
        this.emisionsConcat.push(`Emision de observable: ${this.observableConcatCount}, valor:  ${val}`);
      }
    })

    this.click.pipe(
      exhaustMap( () => {
        this.observableExhaustCount += 1
        return this.interval$
      } )
    ).subscribe({
      next: (val: any) => {
        this.emisionsExhaust.push(`Emision de observable: ${this.observableExhaustCount}, valor:  ${val}`);
      },
      complete: () => {
        console.log('completed')
      }
    })
  }
}
