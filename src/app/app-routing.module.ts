import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FromEventComponent } from './pages/from-event/from-event.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { OfComponent } from './pages/of/of.component';
import { RangeComponent } from './pages/range/range.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { TimerComponent } from './pages/timer/timer.component';

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
    path: '**',
    redirectTo: 'observable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
