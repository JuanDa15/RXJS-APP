import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { fromEvent, Observable, sampleTime, tap } from 'rxjs';

@Component({
  selector: 'app-sample-time',
  templateUrl: './sample-time.component.html',
  styles: [
  ]
})
export class SampleTimeComponent implements AfterViewInit {
  public testInput: FormControl;
  public normalEmissions: string[];
  public sampleEmissions: string[];

  public src$: Observable<any> | null;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor() {
    this.src$ = null;
    this.testInput = new FormControl(null, Validators.required);
    this.normalEmissions = [];
    this.sampleEmissions = [];
  }
  // TODO: Agregar el takeUntil
  ngAfterViewInit(): void {
    this.src$ = fromEvent(this.input.nativeElement, 'input');
    this.src$.pipe(
      tap(resp => this.normalEmissions.push(resp.target.value)),
      sampleTime(3000)
    ).subscribe({
      next: ({target: {value}}) => {
        this.sampleEmissions.push(value)
      }
    })
  }
}
