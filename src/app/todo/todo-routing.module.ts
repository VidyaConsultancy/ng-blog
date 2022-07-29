import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { DetailComponent } from './detail/detail.component';
const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [{ path: 'detail', component: DetailComponent }],
  },
];
// app routing moudle 'todo'
// todo routing module ''
// baseUrl/todo
// baseUrl/todo/detail

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
