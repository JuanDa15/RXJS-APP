import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CombinationRoutingModule } from './combination-routing.module';
import { ForkJoinComponent } from './pages/fork-join/fork-join.component';
import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { MergeComponent } from './pages/merge/merge.component';
import { ConcatComponent } from './pages/concat/concat.component';
import { EndWithComponent } from './pages/end-with/end-with.component';
import { StartWithComponent } from './pages/start-with/start-with.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    StartWithComponent,
    EndWithComponent,
    ConcatComponent,
    MergeComponent,
    CombineLatestComponent,
    ForkJoinComponent
  ],
  imports: [
    CommonModule,
    CombinationRoutingModule,
    ComponentsModule
  ]
})
export class CombinationModule { }
