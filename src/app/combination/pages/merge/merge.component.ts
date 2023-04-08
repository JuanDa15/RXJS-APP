import { Component, OnInit } from '@angular/core';
import { interval, mapTo, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styles: [
  ]
})
export class MergeComponent implements OnInit {
  public emission: string[] = [];
  constructor() { }

  ngOnInit(): void {

//emit every 2.5 seconds
const first = interval(2500);
//emit every 2 seconds
const second = interval(2000);
//emit every 1.5 seconds
const third = interval(1500);
//emit every 1 second
const fourth = interval(1000);

//emit outputs from one observable
const example = merge(
  first.pipe(mapTo('FIRST!')),
  second.pipe(mapTo('SECOND!')),
  third.pipe(mapTo('THIRD')),
  fourth.pipe(mapTo('FOURTH'))
);
//output: "FOURTH", "THIRD", "SECOND!", "FOURTH", "FIRST!", "THIRD", "FOURTH"
const subscribe = example.subscribe(val => {
  this.emission.push(val)
});

setTimeout(() => {
  subscribe.unsubscribe();
}, 8000)
  }

}
