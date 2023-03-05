import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, from, tap } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styles: [
  ]
})
export class DistinctUntilChangedComponent implements OnInit {
  public arr = [{
    name: 'carlos'
  }, {
    name: 'ramiro'
  }, {
    name: 'ramon'
  }, {
    name: 'carlos'
  }, {
    name: 'carlos'
  }, {
    name: 'ramon'
  }]
  public normalEmissions: {name: string}[] = [];
  public distincEmissions: {name: string}[] = [];
  constructor() { }

  ngOnInit(): void {
    from(this.arr).pipe(
      tap(val => this.normalEmissions.push(val)),
      distinctUntilChanged(
        (prev, curr) => prev.name === curr.name
      )
    ).subscribe({
      next: (val) => this.distincEmissions.push(val)
    })
  }

}
