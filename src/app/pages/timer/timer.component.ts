import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, Observer, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styles: ['']
})
export class TimerComponent implements OnInit {

  public dueTime: FormControl<number | null>;
  public results: number[] = [];
  public subscription: Subscription | null;
  public timerBasic$: Observable<number> | null;

  public observer: Observer<number> = {
    next: (value: number) => this.results.push(value),
    error: () => {},
    complete: () => {}
  }

  constructor() { 
    this.dueTime = new FormControl<number | null>(0, [Validators.required, Validators.min(0)]);
    this.timerBasic$ = null;
    this.subscription = null;
  }

  ngOnInit(): void {
  }

  public basicImplementation() {
    this.results = [];
    (!this.subscription?.closed) && this.subscription?.unsubscribe();
    this.timerBasic$ = timer(this.dueTime.value!,);

    this.subscription = this.timerBasic$.subscribe( this.observer );
  }

}
