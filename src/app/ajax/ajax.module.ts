import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AjaxRoutingModule } from './ajax-routing.module';
import { BasicComponent } from './pages/basic/basic.component';
import { GetJsonComponent } from './pages/get-json/get-json.component';
import { PostPutDeleteComponent } from './pages/post-put-delete/post-put-delete.component';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    BasicComponent,
    GetJsonComponent,
    PostPutDeleteComponent
  ],
  imports: [
    CommonModule,
    AjaxRoutingModule,
    ComponentsModule
  ]
})
export class AjaxModule { }
