import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styles: ['']
})
export class FromEventComponent implements AfterViewInit, OnDestroy {

  public points: [number, number][];
  public childs: HTMLDivElement[] = [];
  @ViewChild('box') box!:ElementRef<HTMLDivElement>;

  public src$: Observable<PointerEvent>| null;
  public subscription: Subscription | null;

  constructor() { 
    this.src$ = null;
    this.points = [];
    this.subscription = null;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.src$ = fromEvent<PointerEvent>(this.box?.nativeElement, 'click');

    this.subscription = this.src$?.subscribe({
      next: (event) => {
        const {x, y} = this._getPointPositionInDiv(event);
        this.points.push([x,y]);
        let child = this._createPoint(x,y, this.points.length);
        this.childs.push(child);
        this.box.nativeElement.appendChild(child);
      }
    });
  }

  private _createPoint(x: number, y: number, position: number): HTMLDivElement {
    const element = document.createElement('div');
    let classList = [`inline-block`,`w-[8px]`,`h-[8px]`, `bg-red-500`, 'absolute', 'rounded-full'];
    element.setAttribute('id', `point-${position}`);
    element.classList.add(...classList)
    element.style.transform = `translate(${x}px,${y}px)`;
    return element;
  }

  private _getPointPositionInDiv(
    event: PointerEvent
  ): {x: number, y: number} {
    return {
      x: event.pageX - (<HTMLDivElement>event.currentTarget).offsetLeft,
      y: event.pageY - (<HTMLDivElement>event.currentTarget).offsetTop
    }
  }

  public reset(event: Event) {
    event.stopPropagation();
    this.points = [];
    this.childs.forEach(point => {
      this.box.nativeElement.removeChild(point)
    });
    this.childs = [];
  }
}
