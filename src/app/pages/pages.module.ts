import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservableComponent } from './observable/observable.component';
import { ComponentsModule } from '../components/components.module';
import { SubscriptionComponent } from './subscription/subscription.component';
import { SubjectComponent } from './subject/subject.component';
import { OfComponent } from './of/of.component';
import { FromEventComponent } from './from-event/from-event.component';
import { RangeComponent } from './range/range.component';
import { ReactiveFormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    ObservableComponent,
    SubscriptionComponent,
    SubjectComponent,
    OfComponent,
    FromEventComponent,
    RangeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
