import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { interval, map, Observable, Observer, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styles: ['']
})
export class IntervalComponent {
  public time: FormControl<number | null>;
  public results: number[] = [];
  public isMapped: boolean;
  public subscription: Subscription | null;

  public observer: Observer<number> = {
    next: (value: number) => this.results.push(value),
    error: () => {},
    complete: () => {}
  }

  public interval$: Observable<number> | null;

  constructor() { 
    this.time = new FormControl<number | null>(0, [Validators.required, Validators.min(0)]);
    this.interval$ = null;
    this.subscription = null;
    this.isMapped = false;
  }
  
  public startSubscription() {
    this.isMapped = false;
    this.results = [];
    (!this.subscription?.closed) && this.subscription?.unsubscribe();
    this.interval$ = interval(this.time.value!);

    this.subscription = this.interval$.subscribe( this.observer );
  }

  public cancelSubscription() {
    this.isMapped = false;
    this.subscription?.unsubscribe();
  }

  public subscribeToMapData() {
    this.isMapped = true;
    this.results = [];
    (!this.subscription?.closed) && this.subscription?.unsubscribe();
    this.interval$ = interval(this.time.value!);
    this.subscription = this.interval$.pipe(
      map(val => val * 2)
    ).subscribe( this.observer );

  }
}
