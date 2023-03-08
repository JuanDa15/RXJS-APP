import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime, fromEvent, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styles: [
  ]
})
export class DebounceTimeComponent implements  AfterViewInit {
  public testInput: FormControl;
  public normalEmissions: string[];
  public debounceEmissions: string[];

  public src$: Observable<any> | null;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {
    this.src$ = null;
    this.testInput = new FormControl(null, Validators.required);
    this.normalEmissions = [];
    this.debounceEmissions = [];
  }
  // TODO: Agregar el takeUntil
  ngAfterViewInit(): void {
    this.src$ = fromEvent(this.input.nativeElement, 'input');
    this.src$.pipe(
      tap(resp => this.normalEmissions.push(resp.target.value)),
      debounceTime(1000)
    ).subscribe({
      next: ({target: {value}}) => {
        this.debounceEmissions.push(value)
      }
    })
  }
}
