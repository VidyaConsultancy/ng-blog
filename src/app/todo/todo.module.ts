import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  declarations: [
    TodoComponent,
    HeaderComponent,
    FooterComponent,
    ItemComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ],
  // providers: [ServiceName]
})
export class TodoModule { }
