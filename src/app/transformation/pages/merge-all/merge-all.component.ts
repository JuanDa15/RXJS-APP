import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map, mergeAll, Observable, pluck, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { GitHubUser, GitHubUsersResp } from 'src/app/interfaces/github-response.interface';

@Component({
  selector: 'app-merge-all',
  templateUrl: './merge-all.component.html',
  styles: [
  ]
})
export class MergeAllComponent implements AfterViewInit {
 public src$: Observable<InputEvent> | null;
  public users: GitHubUser[] = [];
  @ViewChild('input') input!: ElementRef<HTMLInputElement>;

  constructor() {
    this.src$ = null;
  }

  ngAfterViewInit(): void {
    this.src$ = fromEvent<InputEvent>(this.input.nativeElement ,'input');
    this.src$.pipe(
      debounceTime<InputEvent>(1000),
      pluck('target', 'value'),
      map<unknown, Observable<GitHubUsersResp>>(text =>
        ajax.getJSON(`https://api.github.com/search/users?q=${text}`)
      ),
      mergeAll<Observable<GitHubUsersResp>>(),
      pluck('items')
    ).subscribe({
      next: (val) => {
        this.users = [...val];
      }
    })
  }
}
