import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { fromEvent, Observable, pluck, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styles: [
  ]
})
export class PluckComponent implements AfterViewInit, OnDestroy {
  public properties: FormControl = new FormControl('target,value')
  @ViewChild('test') testInput!: ElementRef<HTMLInputElement>;
  public src$: Observable<any> | null;
  public subscription: Subscription | null;
  public results: any[] = [];

  constructor() {
    this.src$ = null;
    this.subscription = null;
  }
  ngOnDestroy(): void {
    (!this.subscription?.closed) && this._stopSubs();
  }

  ngAfterViewInit(): void {
    this.src$ = fromEvent(this.testInput!.nativeElement, 'input');
  }

  changePluckProperties(new_properties: string): string[]{
    if (new_properties.trim().length <= 0) {
      return ['target','value'];
    }
    let new_attributes: string[] = new_properties.split(',');
    new_attributes = new_attributes.map(attribute => attribute.trim());
    return new_attributes;
  }

  start() {
    if (!this.subscription?.closed) {
      this._stopSubs();
    }
    this.results = [];
    this.subscription = this.src$!.pipe(
      pluck(...this.changePluckProperties(this.properties.value))
    ).subscribe({
      next: (val) => {
        this.results.push(val);
      }
    })
  }

  private _stopSubs() {
    this.subscription?.unsubscribe();
  }

}
