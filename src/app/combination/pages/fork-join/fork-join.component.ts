import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-fork-join',
  templateUrl: './fork-join.component.html',
  styles: [
  ]
})
export class ForkJoinComponent implements OnInit {
  public emissions: any = null;
  constructor() { }

  ngOnInit(): void {
    /*
  when all observables complete, provide the last
  emitted value from each as dictionary
*/
forkJoin(
  // as of RxJS 6.5+ we can use a dictionary of sources
  {
    google: ajax.getJSON('https://api.github.com/users/google'),
    microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
    users: ajax.getJSON('https://api.github.com/users')
  }
)
  // { google: object, microsoft: object, users: array }
  .subscribe({
    next: (val) => {
      console.log(val)
      this.emissions = val;
    }
  })
  }

}
