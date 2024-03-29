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
          url: '/not-common/take'
        },
        {
          name: 'First',
          url: '/not-common/first'
        },
        {
          name: 'TakeWhile',
          url: '/not-common/take-while'
        },
        {
          name: 'TakeUntil',
          url: '/not-common/take-until'
        },
        {
          name: 'Skip',
          url: '/not-common/skip'
        },
        {
          name: 'Distinct',
          url: '/not-common/distinct'
        },
        {
          name: 'DistinctUntilChange',
          url: '/not-common/distinct-until-changed'
        },
        {
          name: 'DistinctUntilKeyChange',
          url: '/not-common/distinct-until-key-changed'
        }
      ]
    },
    {
      name: 'Operadores de tiempo',
      isOpen: false,
      childs: [
        {
          name: 'DebounceTime',
          url: '/time/debounce-time'
        },
        {
          name: 'ThrottleTime',
          url: '/time/throttle-time'
        },
        {
          name: 'SampleTime',
          url: '/time/sample-time'
        },
        {
          name: 'Sample',
          url: '/time/sample'
        },
        {
          name: 'AuditTime',
          url: '/time/audit-time'
        }
      ]
    },
    {
      name: 'Ajax',
      isOpen: false,
      childs: [
        {
          name: 'Basic-concepts-ajax',
          url: '/ajax/basic'
        },
        {
          name: 'getJSON',
          url: '/ajax/get-json'
        },
        {
          name: 'POST, PUT, DELETE',
          url: '/ajax/post-put-delete'
        }
      ]
    },
    {
      name: 'Operadores de transformación',
      isOpen: false,
      childs: [
        {
          name: 'Merge-all',
          url: '/transformation/merge-all'
        },
        {
          name: 'Merge-map',
          url: '/transformation/merge-map'
        },
        {
          name: 'Switch-map',
          url: '/transformation/switch-map'
        },
        {
          name: 'Concat-map',
          url: '/transformation/concat-map'
        },
        {
          name: 'Exhaust-map',
          url: '/transformation/exhaust-map'
        }
      ]
    },
    {
      name: 'Operadores de combinación',
      isOpen: false,
      childs: [
        {
          name: 'Start-with',
          url: '/combination/start-with'
        },
        {
          name: 'End-with',
          url: '/combination/end-with'
        },
        {
          name: 'Concat',
          url: '/combination/concat'
        },
        {
          name: 'Merge',
          url: '/combination/merge'
        },
        {
          name: 'Combine-latest',
          url: '/combination/combine-latest'
        },
        {
          name: 'Fork-join',
          url: '/combination/fork-join'
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
        },
        {
          name: 'Start-with-lab',
          url: '/labs/start-with-lab'
        }
      ]
    }
  ]
}
