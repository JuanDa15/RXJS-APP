import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax'

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  public url: string = 'https://cataas.com/cat/says/rock?size=50&color=red&json=true';

  constructor() { }

  ngOnInit(): void {

    fetch('https://cataas.com/cat/says/rock?size=50&color=red&json=true')
      .then( this.errorsManagement )
      .then(res => res.json())
      .catch( err => console.warn(err))

    ajax({
      url: this.url,
    }).pipe(
      catchError(this.errorsManagementRxjs)
    ).subscribe({
      next: (val) => console.log('response',val)
    })

  }

  public errorsManagement(resp: Response) {
    if ( !resp.ok ){
      throw(new Error(resp.statusText))
    }
    return resp;
  }


  public errorsManagementRxjs(err: AjaxError): Observable<unknown> {
    console.warn('error en:', err);
    return of([])
  }
}
