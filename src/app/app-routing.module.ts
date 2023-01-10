import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';

const routes: Routes = [
  {
    path: 'observable',
    component: ObservableComponent,
    title: 'Observable'
  },
  {
    path: '**',
    redirectTo: 'observable'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
