import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { asapScheduler, fromEvent, Observable, tap, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle-time',
  templateUrl: './throttle-time.component.html',
  styles: [
  ]
})
export class ThrottleTimeComponent implements AfterViewInit {
  public testInput: FormControl;
  public normalEmissions: string[];
  public throttleEmissions: string[];

  public src$: Observable<any> | null;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor() {
    this.src$ = null;
    this.testInput = new FormControl(null, Validators.required);
    this.normalEmissions = [];
    this.throttleEmissions = [];
  }
  // TODO: Agregar el takeUntil
  ngAfterViewInit(): void {
    this.src$ = fromEvent(this.input.nativeElement, 'input');
    this.src$.pipe(
      tap(resp => this.normalEmissions.push(resp.target.value)),
      throttleTime(1000, asapScheduler, {
        leading: true,
        trailing: true
      })
    ).subscribe({
      next: ({target: {value}}) => {
        this.throttleEmissions.push(value)
      }
    })
  }

}
