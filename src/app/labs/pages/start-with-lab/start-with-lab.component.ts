import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, interval, map, mapTo, of, pipe, reduce, startWith, Subject, take, takeWhile, timer, zip } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-start-with-lab',
  templateUrl: './start-with-lab.component.html',
  styles: [
  ]
})
export class StartWithLabComponent implements OnInit {

  public data: Response | null;

  constructor() {
    this.data = null;
  }
  // La idea es mostrar el loading mientras la respuesta es true,
  // Cuando la respuesta cambia se quita el loader de pantalla
  ngOnInit(): void {
    // ajax.getJSON<Response | boolean>('https://reqres.in/api/users/2?delay=5')
    //   .pipe(
    //     startWith(true)
    //   ).subscribe({
    //   next: (val) => {
    //     if(val === true) {
    //       return
    //     } else {
    //       this.data = val as Response;
    //     }
    //   }
    // })

    // of('batman','joker', 'doble cara', 'hiedra venenosa').pipe(
    //   map(val => val.split(' ').map(resp => resp.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase())).join(' '))
    // ).subscribe({
    //   next: (val) => {
    //     console.log(val)
    //   }
    // })

    // of(...[1,2,'foo',3,5,6,'bar',7,8]).pipe(
    //   filter<any>(val => typeof val === 'number'),
    //   reduce((acc, curr) => acc + curr, 0)
    // ).subscribe(console.log)


    // const reloj$ = interval(1000).pipe(
    //   take(5),
    //   map(() => Math.round(Math.random() * 100))
    // )

    // const subject$ = new Subject();
    // reloj$.subscribe(subject$);
    // subject$.subscribe(val => console.log('obs1', val))
    // subject$.subscribe(val => console.log('obs2', val))

    // let inicio = 9;
    // const countdown$ = interval(700).pipe(
    //   take(inicio),
    //   map((val) => inicio - val)
    // );

    // countdown$.subscribe(console.log)


    // const letras = ['a','b','c','d','e'];
    // const numeros = [1,2,3,4,5];

    // const letras$ = interval(1000).pipe(
    //   map(i => letras[i]),
    //   take(letras.length)
    // )
    // const numeros$ = timer(500,1000).pipe(
    //   map(i => numeros[i]),
    //   take(letras.length)
    // )

    // combineLatest([
    //   letras$,
    //   numeros$
    // ]).pipe(
    //   map(resp => resp.join(''))
    // ).subscribe( console.log )

  }

}
