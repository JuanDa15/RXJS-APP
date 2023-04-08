import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, mergeMap, Observable, pluck, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubUser, GitHubUsersResp } from 'src/app/interfaces/github-response.interface';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styles: [
  ]
})
export class SwitchMapComponent implements AfterViewInit {
  public src$: Observable<InputEvent> | null;
  public users: GitHubUser[] = [];
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {
    this.src$ = null;
  }

  ngAfterViewInit(): void {
    this.src$ = fromEvent<InputEvent>(this.input.nativeElement ,'input');
    this.src$.pipe(
      debounceTime(650),
      pluck('target', 'value'),
      switchMap<unknown, Observable<GitHubUsersResp>>(text =>
        ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
      ),
      pluck('items')
    ).subscribe({
      next: (val) => {
        this.users = [...val]
      },
      complete: () => {
        console.log('xd')
      }
    })
  }
}
