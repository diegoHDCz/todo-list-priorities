import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
exports:[
  MatButtonModule,
  MatCardModule,
  MatTableModule,
  MatToolbarModule
]
})
export class AppMaterialModule { }
