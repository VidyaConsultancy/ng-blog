import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';
const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [{ path: 'detail', component: DetailComponent }],
  },
  {
    path: 'add',
    component: AddComponent
  },
  {
    path: ":id",
    component: DetailComponent
  },
];
// app routing moudle 'todo'
// todo routing module ''
// baseUrl/todo?query=value
// baseUrl/todo/detail?query=value
// baseUrl/todo/todoId?query=value where todoId could be any valid id i.e. 1, 2, 3 etc
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
