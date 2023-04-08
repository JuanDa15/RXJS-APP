import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransformationRoutingModule } from './transformation-routing.module';
import { MergeAllComponent } from './pages/merge-all/merge-all.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';
import { SwitchMapComponent } from './pages/switch-map/switch-map.component';
import { ConcatMapComponent } from './pages/concat-map/concat-map.component';
import { ExhaustMapComponent } from './pages/exhaust-map/exhaust-map.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MergeAllComponent,
    MergeMapComponent,
    SwitchMapComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
  ],
  imports: [
    CommonModule,
    TransformationRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class TransformationModule { }
