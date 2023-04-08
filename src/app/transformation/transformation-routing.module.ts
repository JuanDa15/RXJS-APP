import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MergeAllComponent } from './pages/merge-all/merge-all.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';
import { SwitchMapComponent } from './pages/switch-map/switch-map.component';
import { ConcatMapComponent } from './pages/concat-map/concat-map.component';
import { ExhaustMapComponent } from './pages/exhaust-map/exhaust-map.component';

const routes: Routes = [
  {
    path: 'merge-all',
    component: MergeAllComponent,
    title: 'merge-all'
  },
  {
    path: 'merge-map',
    component: MergeMapComponent,
    title: 'merge-map'
  },
  {
    path: 'switch-map',
    component: SwitchMapComponent,
    title: 'switch-map'
  },
  {
    path: 'concat-map',
    component: ConcatMapComponent,
    title: 'concat-map'
  },
  {
    path: 'exhaust-map',
    component: ExhaustMapComponent,
    title: 'exhaust-map'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransformationRoutingModule { }
