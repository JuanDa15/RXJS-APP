import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'p-card',
  template: `
    <article class="w-full h-full p-4 rounded-md shadow shadow-slate-700 text-justify">
      <ng-content select="*"></ng-content>
    </article>
  `,
  styles: [``]
})
export class CardComponent {

  constructor() { }

}
