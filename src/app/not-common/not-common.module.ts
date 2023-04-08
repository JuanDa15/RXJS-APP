import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotCommonRoutingModule } from './not-common-routing.module';
import { TakeComponent } from './pages/take/take.component';
import { FirstComponent } from './pages/first/first.component';
import { TakeWhileComponent } from './pages/take-while/take-while.component';
import { TakeUntilComponent } from './pages/take-until/take-until.component';
import { SkipComponent } from './pages/skip/skip.component';
import { DistincComponent } from './pages/distinc/distinc.component';
import { DistinctUntilChangedComponent } from './pages/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './pages/distinct-until-key-changed/distinct-until-key-changed.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TakeComponent,
    FirstComponent,
    TakeWhileComponent,
    TakeUntilComponent,
    SkipComponent,
    DistincComponent,
    DistinctUntilChangedComponent,
    DistinctUntilKeyChangedComponent,
  ],
  imports: [
    CommonModule,
    NotCommonRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class NotCommonModule { }
