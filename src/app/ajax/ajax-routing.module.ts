import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './pages/basic/basic.component';
import { GetJsonComponent } from './pages/get-json/get-json.component';
import { PostPutDeleteComponent } from './pages/post-put-delete/post-put-delete.component';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicComponent,
    title: 'ajax basic'
  },
  {
    path: 'get-json',
    component: GetJsonComponent,
    title: 'get JSON'
  },
  {
    path: 'post-put-delete',
    component: PostPutDeleteComponent,
    title: 'post-put-delete'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjaxRoutingModule { }
