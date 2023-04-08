import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabsRoutingModule } from './labs-routing.module';
import { StartWithLabComponent } from './pages/start-with-lab/start-with-lab.component';
import { ProgressBarComponent } from './pages/progress-bar/progress-bar.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ProgressBarComponent,
    StartWithLabComponent,
  ],
  imports: [
    CommonModule,
    LabsRoutingModule,
    ComponentsModule
  ]
})
export class LabsModule { }
