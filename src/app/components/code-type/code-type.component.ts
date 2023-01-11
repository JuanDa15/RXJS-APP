import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'code-type',
  template: `
    <span class="text-emerald-500">
      <ng-content></ng-content>
    </span>
  `,
  styles: [``]
})
export class CodeTypeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
