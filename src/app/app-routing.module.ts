import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './ajax/pages/basic/basic.component';
import { GetJsonComponent } from './ajax/pages/get-json/get-json.component';
import { PostPutDeleteComponent } from './ajax/pages/post-put-delete/post-put-delete.component';
import { CombineLatestComponent } from './combination/pages/combine-latest/combine-latest.component';
import { ConcatComponent } from './combination/pages/concat/concat.component';
import { EndWithComponent } from './combination/pages/end-with/end-with.component';
import { ForkJoinComponent } from './combination/pages/fork-join/fork-join.component';
import { MergeComponent } from './combination/pages/merge/merge.component';
import { StartWithComponent } from './combination/pages/start-with/start-with.component';

import { ProgressBarComponent } from './labs/pages/progress-bar/progress-bar.component';
import { StartWithLabComponent } from './labs/pages/start-with-lab/start-with-lab.component';
import { DistincComponent } from './not-common/pages/distinc/distinc.component';
import { DistinctUntilChangedComponent } from './not-common/pages/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './not-common/pages/distinct-until-key-changed/distinct-until-key-changed.component';
import { FirstComponent } from './not-common/pages/first/first.component';
import { SkipComponent } from './not-common/pages/skip/skip.component';
import { TakeUntilComponent } from './not-common/pages/take-until/take-until.component';
import { TakeWhileComponent } from './not-common/pages/take-while/take-while.component';
import { TakeComponent } from './not-common/pages/take/take.component';
import { AsyncSchedulerComponent } from './observables/pages/async-scheduler/async-scheduler.component';
import { FromEventComponent } from './observables/pages/from-event/from-event.component';
import { IntervalComponent } from './observables/pages/interval/interval.component';
import { ObservableComponent } from './observables/pages/observable/observable.component';
import { OfComponent } from './observables/pages/of/of.component';
import { RangeComponent } from './observables/pages/range/range.component';
import { SubjectComponent } from './observables/pages/subject/subject.component';
import { SubscriptionComponent } from './observables/pages/subscription/subscription.component';
import { TimerComponent } from './observables/pages/timer/timer.component';
import { FilterComponent } from './operators/pages/filter/filter.component';
import { MapToComponent } from './operators/pages/map-to/map-to.component';
import { MapComponent } from './operators/pages/map/map.component';
import { OperatorComponent } from './operators/pages/operator/operator.component';
import { PluckComponent } from './operators/pages/pluck/pluck.component';
import { ReduceComponent } from './operators/pages/reduce/reduce.component';
import { ScanComponent } from './operators/pages/scan/scan.component';
import { TapComponent } from './operators/pages/tap/tap.component';
import { AuditTimeComponent } from './time/pages/audit-time/audit-time.component';
import { DebounceTimeComponent } from './time/pages/debounce-time/debounce-time.component';
import { SampleTimeComponent } from './time/pages/sample-time/sample-time.component';
import { SampleComponent } from './time/pages/sample/sample.component';
import { ThrottleTimeComponent } from './time/pages/throttle-time/throttle-time.component';
import { ConcatMapComponent } from './transformation/pages/concat-map/concat-map.component';
import { ExhaustMapComponent } from './transformation/pages/exhaust-map/exhaust-map.component';
import { MergeAllComponent } from './transformation/pages/merge-all/merge-all.component';
import { MergeMapComponent } from './transformation/pages/merge-map/merge-map.component';
import { SwitchMapComponent } from './transformation/pages/switch-map/switch-map.component';

const routes: Routes = [
  {
    path: 'observables',
    loadChildren: () => import('src/app/observables/observables.module').then(m => m.ObservablesModule)
  },
  {
    path: 'operators',
    loadChildren: () => import('src/app/operators/operators.module').then(m => m.OperatorsModule)
  },
  {
    path: 'not-common',
    loadChildren: () => import('src/app/not-common/not-common.module').then(m => m.NotCommonModule)
  },
  {
    path: 'time',
    loadChildren: () => import('src/app/time/time.module').then(m => m.TimeModule)
  },
  {
    path:'ajax',
    loadChildren: () => import('src/app/ajax/ajax.module').then(m => m.AjaxModule)
  },
  {
    path: 'transformation',
    loadChildren: () => import('src/app/transformation/transformation.module').then(m => m.TransformationModule)
  },
  {
    path: 'combination',
    loadChildren: () => import('src/app/combination/combination.module').then(m => m.CombinationModule)
  },
  {
    path: 'labs',
    loadChildren: () => import('src/app/labs/labs.module').then(m => m.LabsModule)
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
