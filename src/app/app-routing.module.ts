import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { SubscriptionComponent } from './pages/subscription/subscription.component';

const routes: Routes = [
  {
    path: 'observable',
    component: ObservableComponent,
    title: 'Observable'
  },
  {
    path: 'subscription',
    component: SubscriptionComponent,
    title: 'Subscription and unsubscription'
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
