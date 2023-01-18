import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservableComponent } from './pages/observable/observable.component';
import { OfComponent } from './pages/of/of.component';
import { SubjectComponent } from './pages/subject/subject.component';
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
    path: 'subject',
    component: SubjectComponent,
    title: 'subject'
  },
  {
    path: 'of',
    component: OfComponent,
    title: 'of'
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
