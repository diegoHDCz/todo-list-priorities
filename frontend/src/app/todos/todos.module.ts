import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';



@NgModule({
  declarations: [
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    AppMaterialModule
  ]
})
export class TodosModule { }
