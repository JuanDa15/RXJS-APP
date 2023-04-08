import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { concatMap, fromEvent, interval, switchMap, take } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styles: [
  ]
})
export class ConcatMapComponent implements AfterViewInit {
  @ViewChild('clickArea') area!: ElementRef<HTMLDivElement>;
  public interval$ = interval(500).pipe(take(3));
  public click: any = null;
  public emisions: string[];
  public observableCount = 0;
  constructor() {
    this.emisions = [];
  }
  ngAfterViewInit(): void {
    this.click = fromEvent(this.area.nativeElement, 'click');

    this.click.pipe(
      concatMap( () => {
        this.observableCount += 1
        return this.interval$
      })
    ).subscribe({
      next: (val: any) => {
        this.emisions.push(`Emision de observable: ${this.observableCount}, valor:  ${val}`);
      },
      complete: () => {
        this.emisions.push('completed')
      }
    })
  }
}
