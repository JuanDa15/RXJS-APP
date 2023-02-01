import { Component, OnInit } from '@angular/core';
import { from, Observable, Subscription } from 'rxjs'
import { filter } from 'rxjs/operators';

interface Product {
  id: number,
  name: string,
  category: 'fruit' | 'vegetable'
}
const DATA: Product[] = [
  { id: 1, name: 'apple', category: 'fruit' },
  { id: 4, name: 'potato', category: 'vegetable' },
  { id: 3, name: 'strawberry', category: 'fruit' },
  { id: 5, name: 'carrot', category: 'vegetable' },
  { id: 2, name: 'pine-apple', category: 'fruit' },
  { id: 6, name: 'onion', category: 'vegetable' },
  { id: 7, name: 'broccoli', category: 'vegetable' },
  { id: 8, name: 'mango', category: 'fruit' },
  { id: 9, name: 'grappe', category: 'fruit' },
  { id: 10, name: 'garlic', category: 'vegetable' }
]

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styles: [
  ]
})
export class FilterComponent {

  public results: Product[];
  public subs: Subscription | null;
  public appliedFilter: 'vegetables' | 'fruits' | 'id' | 'contains';

  public filter = {
    vegetables: false,
    fruits: false,
    id: false,
    contains: false
  }

  public src$: Observable<Product>


  constructor() {
    this.subs = null;
    this.appliedFilter = 'vegetables';
    this.results = [];
    this.src$ = from(DATA);
  }

  start(newfilter:  'vegetables' | 'fruits' | 'id' | 'contains' = this.appliedFilter) {
    this.results = [];
    this.filter[this.appliedFilter] = false;
    this.filter[newfilter] = !this.filter[newfilter]
    this.subs = this.src$.pipe(
      filter( (val) => {
        const conditions = {
          vegetables: val.category === 'vegetable',
          fruits: val.category === 'fruit',
          id: val.id > 5,
          contains: val.name.includes('a')
        }

        return <boolean>conditions[newfilter];
      })
    ).subscribe({
      next: (val) => {
        this.appliedFilter = newfilter;
        this.results.push(val)
      }
    })
  }

}
