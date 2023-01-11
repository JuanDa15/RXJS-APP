import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { ComponentsModule } from '../components/components.module';
import { SubscriptionComponent } from './subscription/subscription.component';



@NgModule({
  declarations: [
    ObservableComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
