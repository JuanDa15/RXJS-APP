import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartWithComponent } from './pages/start-with/start-with.component';
import { EndWithComponent } from './pages/end-with/end-with.component';
import { ConcatComponent } from './pages/concat/concat.component';
import { MergeComponent } from './pages/merge/merge.component';
import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { ForkJoinComponent } from './pages/fork-join/fork-join.component';

const routes: Routes = [
  {
    path: 'start-with',
    component: StartWithComponent,
    title: 'start-with'
  },
  {
    path: 'end-with',
    component: EndWithComponent,
    title: 'end-with'
  },
  {
    path: 'concat',
    component: ConcatComponent,
    title: 'concat'
  },
  {
    path: 'merge',
    component: MergeComponent,
    title: 'merge'
  },
  {
    path: 'combine-latest',
    component: CombineLatestComponent,
    title: 'combine-latest'
  },
  {
    path: 'fork-join',
    component: ForkJoinComponent,
    title: 'fork-join'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CombinationRoutingModule { }
