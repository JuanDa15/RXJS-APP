import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, mergeMap, of, take, map, fromEvent, takeUntil, Observable, debounceTime, pluck } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubUser, GitHubUsersResp } from 'src/app/interfaces/github-response.interface';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styles: [
  ]
})
export class MergeMapComponent implements AfterViewInit {
  public src$: Observable<InputEvent> | null;
  public users: GitHubUser[] = [];
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;
  public url = 'https://httpbin.org/delay/4?arg='
  constructor() {
    this.src$ = null;
  }
  // Ejemplo 3
  ngAfterViewInit(): void {
    this.src$ = fromEvent<InputEvent>(this.input.nativeElement ,'input');
    this.src$.pipe(
      debounceTime<InputEvent>(1000),
      pluck('target', 'value'),
      mergeMap<unknown, Observable<GitHubUsersResp>>(text =>
        ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
      ),
      pluck('items')
    ).subscribe({
      next: (val) => {
        this.users = [...val];
      }
    })
  }
}
