import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeRoutingModule } from './time-routing.module';
import { AuditTimeComponent } from './pages/audit-time/audit-time.component';
import { SampleComponent } from './pages/sample/sample.component';
import { SampleTimeComponent } from './pages/sample-time/sample-time.component';
import { ThrottleTimeComponent } from './pages/throttle-time/throttle-time.component';
import { DebounceTimeComponent } from './pages/debounce-time/debounce-time.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DebounceTimeComponent,
    ThrottleTimeComponent,
    SampleTimeComponent,
    SampleComponent,
    AuditTimeComponent,
  ],
  imports: [
    CommonModule,
    TimeRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class TimeModule { }
