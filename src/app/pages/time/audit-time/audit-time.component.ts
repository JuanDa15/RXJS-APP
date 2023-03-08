import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { auditTime, fromEvent, interval, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-audit-time',
  templateUrl: './audit-time.component.html',
  styles: [
  ]
})
export class AuditTimeComponent implements AfterViewInit  {
  public testInput: FormControl;
  public normalEmissions: number[];
  public auditEmissions: number[];
  public interval$: Observable<number>;
  public src$: Observable<any> | null;
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  constructor() {
    this.interval$ = interval(4000);
    this.src$ = null;
    this.testInput = new FormControl(null, Validators.required);
    this.normalEmissions = [];
    this.auditEmissions = [];
  }
  // TODO: Agregar el takeUntil
  ngAfterViewInit(): void {
    this.src$ = fromEvent(this.input.nativeElement, 'input');
    this.src$.pipe(
      tap(resp => this.normalEmissions.push(resp.target.value)),
      auditTime(3000)
    ).subscribe({
      next: ({target: {value}}) => {
        this.auditEmissions.push(value)
      }
    })
  }
}
