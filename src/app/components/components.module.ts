import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CodeTypeComponent } from './code-type/code-type.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    CodeTypeComponent,
    CardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CodeTypeComponent,
    CardComponent,
  ]
})
export class ComponentsModule { }
