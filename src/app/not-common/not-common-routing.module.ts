import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TakeComponent } from './pages/take/take.component';
import { FirstComponent } from './pages/first/first.component';
import { TakeWhileComponent } from './pages/take-while/take-while.component';
import { TakeUntilComponent } from './pages/take-until/take-until.component';
import { SkipComponent } from './pages/skip/skip.component';
import { DistincComponent } from './pages/distinc/distinc.component';
import { DistinctUntilChangedComponent } from './pages/distinct-until-changed/distinct-until-changed.component';
import { DistinctUntilKeyChangedComponent } from './pages/distinct-until-key-changed/distinct-until-key-changed.component';

const routes: Routes = [
  {
    path: 'take',
    component: TakeComponent,
    title: 'take'
  },
  {
    path: 'first',
    component: FirstComponent,
    title: 'first'
  },
  {
    path: 'take-while',
    component: TakeWhileComponent,
    title: 'take-while'
  },
  {
    path: 'take-until',
    component: TakeUntilComponent,
    title: 'take-until'
  },
  {
    path: 'skip',
    component: SkipComponent,
    title: 'skip'
  },
  {
    path: 'distinct',
    component: DistincComponent,
    title: 'distinct'
  },
  {
    path: 'distinct-until-changed',
    component: DistinctUntilChangedComponent,
    title: 'distinct-until-changed'
  },
  {
    path: 'distinct-until-key-changed',
    component: DistinctUntilKeyChangedComponent,
    title: 'distinct-until-key-changed'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotCommonRoutingModule { }
