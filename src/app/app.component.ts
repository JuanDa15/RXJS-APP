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
    },
    {
      name: 'Operadores',
      isOpen: false,
      childs: [
        {
          name: 'Operador',
          url: '/operators/operator'
        },
        {
          name: 'Map',
          url: '/operators/map'
        },
        {
          name: 'Pluck',
          url: '/operators/pluck'
        },
        {
          name: 'Map to',
          url: '/operators/map-to'
        },
        {
          name: 'Filter',
          url: '/operators/filter'
        },
        {
          name: 'Tap',
          url: '/operators/tap'
        },
        {
          name: 'Reduce',
          url: '/operators/reduce'
        },
        {
          name: 'Scan',
          url: '/operators/scan'
        },
      ]
    },
    {
      name: 'Operadores no comunes',
      isOpen: false,
      childs: [
        {
          name: 'Take',
          url: '/not-commons/take'
        },
        {
          name: 'First',
          url: '/not-commons/first'
        },
        {
          name: 'TakeWhile',
          url: '/not-commons/take-while'
        },
        {
          name: 'TakeUntil',
          url: '/not-commons/take-until'
        },
        {
          name: 'Skip',
          url: '/not-commons/skip'
        },
        {
          name: 'Distinct',
          url: '/not-commons/distinct'
        },
        {
          name: 'DistinctUntilChange',
          url: '/not-commons/distinct-until-change'
        },
        {
          name: 'DistinctUntilKeyChange',
          url: '/not-commons/distinct-until-key-change'
        }
      ]
    },
    {
      name: 'Labs',
      isOpen: false,
      childs: [
        {
          name: 'Progress-bar',
          url: '/labs/progress-bar'
        }
      ]
    }
  ]
}
