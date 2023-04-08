import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObservablesRoutingModule } from './observables-routing.module';
import { ObservableComponent } from './pages/observable/observable.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { SubjectComponent } from './pages/subject/subject.component';
import { OfComponent } from './pages/of/of.component';
import { FromEventComponent } from './pages/from-event/from-event.component';
import { RangeComponent } from './pages/range/range.component';
import { TimerComponent } from './pages/timer/timer.component';
import { IntervalComponent } from './pages/interval/interval.component';
import { AsyncSchedulerComponent } from './pages/async-scheduler/async-scheduler.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ObservableComponent,
    SubscriptionComponent,
    SubjectComponent,
    OfComponent,
    FromEventComponent,
    RangeComponent,
    TimerComponent,
    IntervalComponent,
    AsyncSchedulerComponent,
  ],
  imports: [
    CommonModule,
    ObservablesRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class ObservablesModule { }
