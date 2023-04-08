import { Component, OnInit } from '@angular/core';
import { distinctUntilKeyChanged, from, tap } from 'rxjs';

@Component({
  selector: 'app-distinct-until-key-changed',
  templateUrl: './distinct-until-key-changed.component.html',
  styles: [
  ]
})
export class DistinctUntilKeyChangedComponent implements OnInit {
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
      distinctUntilKeyChanged('name', (x, y) => x.substring(0, 3) === y.substring(0, 3))
    ).subscribe({
      next: (val) => this.distincEmissions.push(val)
    })
  }

}
