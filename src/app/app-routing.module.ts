import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/ajax/basic/basic.component';
import { GetJsonComponent } from './pages/ajax/get-json/get-json.component';
import { PostPutDeleteComponent } from './pages/ajax/post-put-delete/post-put-delete.component';
import { ProgressBarComponent } from './pages/labs/progress-bar/progress-bar.component';
import { DistincComponent } from './pages/not-common/distinc/distinc.component';
import { DistinctUntilChangedComponent } from './pages/not-common/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './pages/not-common/distinct-until-key-changed/distinct-until-key-changed.component';
import { FirstComponent } from './pages/not-common/first/first.component';
import { SkipComponent } from './pages/not-common/skip/skip.component';
import { TakeUntilComponent } from './pages/not-common/take-until/take-until.component';
import { TakeWhileComponent } from './pages/not-common/take-while/take-while.component';
import { TakeComponent } from './pages/not-common/take/take.component';
import { AsyncSchedulerComponent } from './pages/observables/async-scheduler/async-scheduler.component';
import { FromEventComponent } from './pages/observables/from-event/from-event.component';
import { IntervalComponent } from './pages/observables/interval/interval.component';
import { ObservableComponent } from './pages/observables/observable/observable.component';
import { OfComponent } from './pages/observables/of/of.component';
import { RangeComponent } from './pages/observables/range/range.component';
import { SubjectComponent } from './pages/observables/subject/subject.component';
import { SubscriptionComponent } from './pages/observables/subscription/subscription.component';
import { TimerComponent } from './pages/observables/timer/timer.component';
import { FilterComponent } from './pages/operators/filter/filter.component';
import { MapToComponent } from './pages/operators/map-to/map-to.component';
import { MapComponent } from './pages/operators/map/map.component';
import { OperatorComponent } from './pages/operators/operator/operator.component';
import { PluckComponent } from './pages/operators/pluck/pluck.component';
import { ReduceComponent } from './pages/operators/reduce/reduce.component';
import { ScanComponent } from './pages/operators/scan/scan.component';
import { TapComponent } from './pages/operators/tap/tap.component';
import { AuditTimeComponent } from './pages/time/audit-time/audit-time.component';
import { DebounceTimeComponent } from './pages/time/debounce-time/debounce-time.component';
import { SampleTimeComponent } from './pages/time/sample-time/sample-time.component';
import { SampleComponent } from './pages/time/sample/sample.component';
import { ThrottleTimeComponent } from './pages/time/throttle-time/throttle-time.component';

const routes: Routes = [
  {
    path: 'observables',
    children: [
      {
        path: 'observable',
        component: ObservableComponent,
        title: 'Observable'
      },

      {
        path: 'subscription',
        component: SubscriptionComponent,
        title: 'Subscription and unsubscription'
      },
      {
        path: 'subject',
        component: SubjectComponent,
        title: 'subject'
      },
      {
        path: 'of',
        component: OfComponent,
        title: 'of'
      },
      {
        path: 'fromEvent',
        component: FromEventComponent,
        title: 'fromEvent'
      },
      {
        path: 'range',
        component: RangeComponent,
        title: 'range'
      },
      {
        path: 'interval',
        component: IntervalComponent,
        title: 'interval'
      },
      {
        path: 'timer',
        component: TimerComponent,
        title: 'timer'
      },
      {
        path: 'async-scheduler',
        component: AsyncSchedulerComponent,
        title: 'async-scheduler'
      },
    ]
  },
  {
    path: 'operators',
    children: [
      {
        path: 'operator',
        component: OperatorComponent,
        title: 'operator'
      },
      {
        path: 'map',
        component: MapComponent,
        title: 'map'
      },
      {
        path: 'map-to',
        component: MapToComponent,
        title: 'map to'
      },
      {
        path: 'pluck',
        component: PluckComponent,
        title: 'pluck'
      },
      {
        path: 'filter',
        component: FilterComponent,
        title: 'filter'
      },
      {
        path: 'tap',
        component: TapComponent,
        title: 'tap'
      },
      {
        path: 'reduce',
        component: ReduceComponent,
        title: 'reduce'
      },
      {
        path: 'scan',
        component: ScanComponent,
        title: 'scan'
      }
    ]
  },
  {
    path: 'not-common',
    children: [
      {
        path: 'take',
        component: TakeComponent,
        title: 'take'
      },
      {
        path: 'first',
        component: FirstComponent,
        title: 'first'
      },
      {
        path: 'take-while',
        component: TakeWhileComponent,
        title: 'take-while'
      },
      {
        path: 'take-until',
        component: TakeUntilComponent,
        title: 'take-until'
      },
      {
        path: 'skip',
        component: SkipComponent,
        title: 'skip'
      },
      {
        path: 'distinct',
        component: DistincComponent,
        title: 'distinct'
      },
      {
        path: 'distinct-until-changed',
        component: DistinctUntilChangedComponent,
        title: 'distinct-until-changed'
      },
      {
        path: 'distinct-until-key-changed',
        component: DistinctUntilKeyChangedComponent,
        title: 'distinct-until-key-changed'
      }
    ]
  },
  {
    path: 'time',
    children: [
      {
        path: 'debounce-time',
        component: DebounceTimeComponent,
        title: 'debounce-time'
      },
      {
        path: 'throttle-time',
        component: ThrottleTimeComponent,
        title: 'throttle-time'
      },
      {
        path: 'sample-time',
        component: SampleTimeComponent,
        title: 'sample-time'
      },
      {
        path: 'sample',
        component: SampleComponent,
        title: 'sample'
      },
      {
        path: 'audit-time',
        component: AuditTimeComponent,
        title: 'audit time'
      }
    ]
  },
  {
    path:'ajax',
    children: [
      {
        path: 'basic',
        component: BasicComponent,
        title: 'ajax basic'
      },
      {
        path: 'get-json',
        component: GetJsonComponent,
        title: 'get JSON'
      },
      {
        path: 'post-put-delete',
        component: PostPutDeleteComponent,
        title: 'post-put-delete'
      }
    ]
  },
  {
    path: 'labs',
    children: [
      {
        path: 'progress-bar',
        component: ProgressBarComponent,
        title: 'progress bar'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'observables/observable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
