import { Component, OnInit } from '@angular/core';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-post-put-delete',
  templateUrl: './post-put-delete.component.html',
  styles: [
  ]
})
export class PostPutDeleteComponent implements OnInit {
  public url: string = 'https://httpbin.org/delay/1';

  public observer = {
    next: (val: any) => console.log(val),
    error: (err: any) => console.warn(err),
    complete: () => console.info('completed')
  }
  constructor() { }

  ngOnInit(): void {

    ajax.get(this.url, {
      'Content-type':'Application/json'
    }).subscribe(this.observer)

    ajax.post(this.url, {
      name: 'Juan David',
      last_name: 'Osorio Ortiz',
      age: '19'
    }, {
      'Token': 'fsfseffoj232dfes'
    }).subscribe(this.observer)

    ajax.put(this.url, {
      name: 'Juan David',
      last_name: 'Osorio Ortiz',
      age: '19'
    }, {
      'Token': 'fsfseffoj232dfes'
    }).subscribe(this.observer)

    ajax({
      url: this.url,
      method: 'DELETE',
      headers: {
        'Token': 'fsfesfeef343'
      },
      body: {
        id: 1,
        nombre: 'xd'
      }
    }).subscribe(this.observer)
  }

}
