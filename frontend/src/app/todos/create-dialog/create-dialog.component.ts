import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Todo } from '../model/todo';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent {

  todo = {
    title: '',
    description: '',
    priority: '',
    assignee: '',
    deadline: '',

    active: false
  }

  constructor(private todosService: TodosService,
    public dialogRef: MatDialogRef<CreateDialogComponent>,

  ) {

  }

  createTodo():void {
    this.todosService.create(this.todo);
    this.onNoClick()
  }
  onNoClick(): void {

    this.dialogRef.close();
    window.location.reload();
  }
}
