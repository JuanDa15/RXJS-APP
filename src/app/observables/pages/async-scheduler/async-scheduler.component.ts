import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { asyncScheduler, SchedulerAction } from 'rxjs';

@Component({
  selector: 'app-async-scheduler',
  templateUrl: './async-scheduler.component.html',
  styles: []
})
export class AsyncSchedulerComponent implements OnInit {
  public name: FormControl = new FormControl()
  public timeOutResponse: string = '';
  public intervalResponse: string[] = [];
  constructor() { }

  ngOnInit(): void {

  }

  executeTimeout(value: string): void {
    const THIS = this;
    const saludar = function(name: string){
      THIS.timeOutResponse = `hello ${name}`;
    };
    asyncScheduler.schedule(()=>saludar(value), 1000);
    this.name.reset();
  }

  executeInterval(): void {
    this.intervalResponse = [];
    const THIS = this;
    const subs = asyncScheduler.schedule( function(state = 0){
      const value = `state ${state}`;
      THIS.intervalResponse.push(value);
      this.schedule(state + 1, 1000)
    }, 1000, 0);

    setTimeout(() => {
      subs.unsubscribe();
    }, 5000)
  }

}
