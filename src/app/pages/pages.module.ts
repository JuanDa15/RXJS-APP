import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observables/observable/observable.component';
import { ComponentsModule } from '../components/components.module';
import { SubscriptionComponent } from './observables/subscription/subscription.component';
import { SubjectComponent } from './observables/subject/subject.component';
import { OfComponent } from './observables/of/of.component';
import { FromEventComponent } from './observables/from-event/from-event.component';
import { RangeComponent } from './observables/range/range.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimerComponent } from './observables/timer/timer.component';
import { IntervalComponent } from './observables/interval/interval.component';
import { AsyncSchedulerComponent } from './observables/async-scheduler/async-scheduler.component';
import { OperatorComponent } from './operators/operator/operator.component';
import { MapComponent } from './operators/map/map.component';


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
    OperatorComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
