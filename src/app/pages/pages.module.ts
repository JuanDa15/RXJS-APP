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
import { MapToComponent } from './operators/map-to/map-to.component';
import { PluckComponent } from './operators/pluck/pluck.component';
import { FilterComponent } from './operators/filter/filter.component';
import { TapComponent } from './operators/tap/tap.component';


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
    MapComponent,
    MapToComponent,
    PluckComponent,
    FilterComponent,
    TapComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
