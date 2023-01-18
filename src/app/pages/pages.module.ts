import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { ComponentsModule } from '../components/components.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { OfComponent } from './of/of.component';



@NgModule({
  declarations: [
    ObservableComponent,
    SubscriptionComponent,
    SubjectComponent,
    OfComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class PagesModule { }
