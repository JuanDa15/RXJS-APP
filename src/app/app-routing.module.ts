import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsyncSchedulerComponent } from './pages/observables/async-scheduler/async-scheduler.component';
import { FromEventComponent } from './pages/observables/from-event/from-event.component';
import { IntervalComponent } from './pages/observables/interval/interval.component';
import { ObservableComponent } from './pages/observables/observable/observable.component';
import { OfComponent } from './pages/observables/of/of.component';
import { RangeComponent } from './pages/observables/range/range.component';
import { SubjectComponent } from './pages/observables/subject/subject.component';
import { SubscriptionComponent } from './pages/observables/subscription/subscription.component';
import { TimerComponent } from './pages/observables/timer/timer.component';
import { OperatorComponent } from './pages/operators/operator/operator.component';

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
        title: ''
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
