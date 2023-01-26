import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styles: [``]
})
export class SubscriptionComponent implements OnDestroy {

  public streamedData: number[];
  public interval$: Observable<number>;


  public subscription: Subscription | null;

  constructor() { 
    this.streamedData = [];
    this.subscription = null;
    this.interval$ = new Observable<number>( suscriber => {
      let i = 0;
      const interval = setInterval( () => {
        suscriber.next(i);
        i++;
      }, 1000);
      
      return () => { clearInterval(interval) }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public startSubscription(): void {
    this.subscription?.unsubscribe();
    this.streamedData = [];
    this.subscription =  this.interval$.subscribe({
      next: (val) => this.streamedData.push(val)
    })
  }

  public cancelSubscription(): void {
    this.subscription?.unsubscribe();
  }

}
