import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScanComponent } from './pages/scan/scan.component';
import { ReduceComponent } from './pages/reduce/reduce.component';
import { TapComponent } from './pages/tap/tap.component';
import { FilterComponent } from './pages/filter/filter.component';
import { PluckComponent } from './pages/pluck/pluck.component';
import { MapToComponent } from './pages/map-to/map-to.component';
import { MapComponent } from './pages/map/map.component';
import { OperatorComponent } from './pages/operator/operator.component';

const routes: Routes = [
  {
    path: 'operator',
    component: OperatorComponent,
    title: 'operator'
  },
  {
    path: 'map',
    component: MapComponent,
    title: 'map'
  },
  {
    path: 'map-to',
    component: MapToComponent,
    title: 'map to'
  },
  {
    path: 'pluck',
    component: PluckComponent,
    title: 'pluck'
  },
  {
    path: 'filter',
    component: FilterComponent,
    title: 'filter'
  },
  {
    path: 'tap',
    component: TapComponent,
    title: 'tap'
  },
  {
    path: 'reduce',
    component: ReduceComponent,
    title: 'reduce'
  },
  {
    path: 'scan',
    component: ScanComponent,
    title: 'scan'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorsRoutingModule { }
