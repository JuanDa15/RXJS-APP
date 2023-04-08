import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { OfComponent } from './pages/of/of.component';
import { FromEventComponent } from './pages/from-event/from-event.component';
import { RangeComponent } from './pages/range/range.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { TimerComponent } from './pages/timer/timer.component';
import { AsyncSchedulerComponent } from './pages/async-scheduler/async-scheduler.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservablesRoutingModule { }
