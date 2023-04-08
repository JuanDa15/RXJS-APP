import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DebounceTimeComponent } from './pages/debounce-time/debounce-time.component';
import { ThrottleTimeComponent } from './pages/throttle-time/throttle-time.component';
import { SampleTimeComponent } from './pages/sample-time/sample-time.component';
import { SampleComponent } from './pages/sample/sample.component';
import { AuditTimeComponent } from './pages/audit-time/audit-time.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeRoutingModule { }
