import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-get-json',
  templateUrl: './get-json.component.html',
  styles: [
  ]
})
export class GetJsonComponent implements OnInit {
  public url: string = 'https://httpbin.org/delay/1';
  public url2 = 'https://cataas.com/cat/says/rock?size=50&color=red&json=true';
  public obs$ = ajax.getJSON(this.url, {
    'Content-Type': 'application/json',
    'my-authorization': 'fesjfoi-esfsef-fef'
  });

  public obs2$ = ajax(this.url);

  constructor() { }

  ngOnInit(): void {

    this.obs$.subscribe({
      next: (val) => console.log(val)
    })

    this.obs2$.subscribe({
      next: (val) => console.log(val)
    })
  }

}
