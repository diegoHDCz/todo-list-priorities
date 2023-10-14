import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TodosDialogComponent } from './todos-dialog/todos-dialog.component';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos/todos.component';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';

@NgModule({
  declarations: [TodosComponent, TodosDialogComponent, CreateDialogComponent],
  imports: [CommonModule, TodosRoutingModule, AppMaterialModule],
})
export class TodosModule {}
