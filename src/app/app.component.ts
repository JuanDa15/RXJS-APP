import { Component } from '@angular/core';

interface AsideItem {
  name: string;
  isOpen: boolean;
  childs: ChildAsideItem[];
}

interface ChildAsideItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-app';

  showAside = false;

  public asideData: AsideItem[] = [
    {
      name: 'Observable basico',
      isOpen: false,
      childs: [
        {
          name: 'Observable',
          url: '/observables/observable'
        },
        {
          name: 'Subs and unsubs',
          url: '/observables/subscription'
        },
        {
          name: 'Subject',
          url: '/observables/subject'
        }
      ]
    },
    {
      name: 'Funciones de creación',
      isOpen: false,
      childs: [
        {
          name: 'Of',
          url: '/observables/of'
        },
        {
          name: 'FromEvent',
          url: '/observables/fromEvent'
        },
        {
          name: 'Range',
          url: '/observables/range'
        },
        {
          name: 'Interval',
          url: '/observables/interval'
        },
        {
          name: 'Timer',
          url: '/observables/timer'
        },
        {
          name: 'AsyncScheduler',
          url: '/observables/async-scheduler'
        }
      ]
    }
  ]
}
