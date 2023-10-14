import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';



@Component({
  selector: 'app-todos-dialog',
  templateUrl: './todos-dialog.component.html',
  styleUrls: ['./todos-dialog.component.scss']
})

export class TodosDialogComponent {

  todo: Todo;

  constructor( private todosService:TodosService,
    public dialogRef: MatDialogRef<TodosDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Todo,
  ) {
    this.todo = data;
  }
  onSaveTodo():void {
    this.todosService.edit(this.todo);
    this.onNoClick();
  }

  onNoClick(): void {
    window.location.reload();
    this.dialogRef.close();
  }
}
