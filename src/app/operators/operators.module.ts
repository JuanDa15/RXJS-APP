import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorsRoutingModule } from './operators-routing.module';
import { ScanComponent } from './pages/scan/scan.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { TapComponent } from './pages/tap/tap.component';
import { FilterComponent } from './pages/filter/filter.component';
import { PluckComponent } from './pages/pluck/pluck.component';
import { MapToComponent } from './pages/map-to/map-to.component';
import { MapComponent } from './pages/map/map.component';
import { OperatorComponent } from './pages/operator/operator.component';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OperatorComponent,
    MapComponent,
    MapToComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    ReduceComponent,
    ScanComponent,
  ],
  imports: [
    CommonModule,
    OperatorsRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class OperatorsModule { }
