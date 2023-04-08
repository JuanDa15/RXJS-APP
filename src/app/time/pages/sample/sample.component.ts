import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent, interval, Observable, sample, tap } from 'rxjs';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styles: [
  ]
})
export class SampleComponent implements AfterViewInit {

  public testInput: FormControl;
  public normalEmissions: number[];
  public sampleEmissions: number[];
  public interval$: Observable<number>;
  public src$: Observable<any> | null;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor() {
    this.interval$ = interval(4000);
    this.src$ = null;
    this.testInput = new FormControl(null, Validators.required);
    this.normalEmissions = [];
    this.sampleEmissions = [];
  }
  // TODO: Agregar el takeUntil
  ngAfterViewInit(): void {
    this.src$ = fromEvent(this.input.nativeElement, 'input');
    this.interval$.pipe(
      tap(resp => this.normalEmissions.push(resp)),
      sample(this.src$)
    ).subscribe({
      next: (number2) => {
        this.sampleEmissions.push(number2)
      }
    })
  }
}
