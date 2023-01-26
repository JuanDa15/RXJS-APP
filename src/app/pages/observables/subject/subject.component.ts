import { Component } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styles: ['']
})
export class SubjectComponent {
  public subjectAnswers: number[][];
  public randomAnswers: number[][];
  public randomSubscriptionsArr$: Subscription[];
  public subjectSubscriptionsArr$: Subscription[];
  public subject$: Subject<number>;
  public intervalSubscription: Subscription | null;
  public intervalo$;

  constructor() { 
    this.subjectAnswers = [[],[],[],[]];
    this.randomAnswers = [[],[],[],[]];
    this.randomSubscriptionsArr$ = new Array(4);
    this.subjectSubscriptionsArr$ = new Array(4);
    this.subject$ = new Subject();
    this.intervalSubscription = null;
    this.intervalo$ = new Observable<number>( subs => {
      let interval = setInterval( () => {
        subs.next(Math.round(Math.random() * 1000))
      }, 1000);
      setTimeout(() => { subs.complete() }, 12000);
      return () => clearInterval(interval);
    });
  }

  public initializeRandom() {
    this.randomAnswers = [[],[],[],[]]
    for(let i = 0; i < this.randomSubscriptionsArr$.length; i++) {
      this.randomSubscriptionsArr$[i] = this.intervalo$.subscribe({
        next: (val) => {
          this.randomAnswers[i].push(val)
        }
      })
    }
  }

  public cancelRandomSubscription() {
    this.randomSubscriptionsArr$.forEach(sub => {
      (!sub.closed) && sub.unsubscribe();
    })
  }

  public initializeSubject() {
    this.intervalSubscription = this.intervalo$.subscribe(this.subject$);
    this.subjectAnswers = [[],[],[],[]];
    for(let i = 0; i < this.subjectSubscriptionsArr$.length; i++) {
      this.subjectSubscriptionsArr$[i] = this.subject$.subscribe({
        next: (val) => {
          this.subjectAnswers[i].push(val);
        }
      })
    }
  }

  public cancelSubject() {
    this.subjectSubscriptionsArr$.forEach(sub => {
      (!sub.closed) && sub.unsubscribe();
    });
    this.intervalSubscription?.unsubscribe();
  }
}
