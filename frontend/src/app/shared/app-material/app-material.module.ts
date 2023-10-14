import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class AppMaterialModule {}
