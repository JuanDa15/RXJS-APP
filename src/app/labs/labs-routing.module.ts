import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgressBarComponent } from './pages/progress-bar/progress-bar.component';
import { StartWithLabComponent } from './pages/start-with-lab/start-with-lab.component';

const routes: Routes = [
  {
    path: 'progress-bar',
    component: ProgressBarComponent,
    title: 'progress bar'
  },
  {
    path: 'start-with-lab',
    component: StartWithLabComponent,
    title: 'start-with-lab'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LabsRoutingModule { }
