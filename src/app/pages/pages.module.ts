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
import { ProgressBarComponent } from './labs/progress-bar/progress-bar.component';
import { ReduceComponent } from './operators/reduce/reduce.component';
import { ScanComponent } from './operators/scan/scan.component';
import { TakeComponent } from './not-common/take/take.component';
import { FirstComponent } from './not-common/first/first.component';
import { TakeWhileComponent } from './not-common/take-while/take-while.component';
import { TakeUntilComponent } from './not-common/take-until/take-until.component';
import { SkipComponent } from './not-common/skip/skip.component';
import { DistincComponent } from './not-common/distinc/distinc.component';
import { DistinctUntilChangedComponent } from './not-common/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './not-common/distinct-until-key-changed/distinct-until-key-changed.component';
import { DebounceTimeComponent } from './time/debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './time/throttle-time/throttle-time.component';
import { SampleTimeComponent } from './time/sample-time/sample-time.component';
import { SampleComponent } from './time/sample/sample.component';
import { AuditTimeComponent } from './time/audit-time/audit-time.component';
import { BasicComponent } from './ajax/basic/basic.component';
import { GetJsonComponent } from './ajax/get-json/get-json.component';
import { PostPutDeleteComponent } from './ajax/post-put-delete/post-put-delete.component';


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
    TapComponent,
    ProgressBarComponent,
    ReduceComponent,
    ScanComponent,
    TakeComponent,
    FirstComponent,
    TakeWhileComponent,
    TakeUntilComponent,
    SkipComponent,
    DistincComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
    DebounceTimeComponent,
    ThrottleTimeComponent,
    SampleTimeComponent,
    SampleComponent,
    AuditTimeComponent,
    BasicComponent,
    GetJsonComponent,
    PostPutDeleteComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PagesModule { }
