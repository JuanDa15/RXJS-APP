import { Component, OnInit } from '@angular/core';
import { Observer, Observable } from 'rxjs';
@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent {
  public isCompleted: boolean = false;
  public statuses: string[] = [];
  public observer: Observer<string> = {
    next: (resp) => {
      this.statuses.push(resp);
      console.log('pushe');
    },
    error: (err) => console.log(err),
    complete: () => this.isCompleted = true
  }

  public obs$ = new Observable<string>( subscriber => {
    let interval: any;
    subscriber.next(`Emmitting from observable 0`);
    let i: number = 0;

    interval = setInterval(() => {
      i++;
      subscriber.next(`Emmitting from observable ${i}`);
      if (i === 6) {
        clearInterval(interval);
        subscriber.complete();
      }
    }, 3000);


  });

  constructor(){
  }
  
  startStream() {
    this.isCompleted = false;
    this.statuses = [];
    this.obs$.subscribe(this.observer)
    
  }

}
