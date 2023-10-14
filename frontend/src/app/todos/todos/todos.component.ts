import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TodosDialogComponent } from '../todos-dialog/todos-dialog.component';
import { Todo } from './../model/todo';
import { TodosService } from './../services/todos.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Todo[] = [];

  displayedColumns = [
    'id',
    'title',
    'assignee',
    'description',
    'priority',
    'deadline',
    'action',
  ];
  constructor(private todosService: TodosService, public dialog: MatDialog) {
    this.todosService.list().forEach((data) => {
      if (data) {
        this.todos = data.content;
      }
    });
  }

  openDialogEdit(item: Todo): void {
    const date = new Date(item.deadline);
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() +1).padStart(2,'0')}-${String(date.getDay()).padStart(2,'0')}`

    item.deadline = formattedDate
    const dialogRef = this.dialog.open(TodosDialogComponent, {
      data: item,
      height: '28rem',
      width: '60rem',
    });
    console.log(item);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateDialogComponent, {
      height: '28rem',
      width: '60rem',
    });
    dialogRef.afterClosed()

  }

  onDeleteTodo(item: Todo): void {
    this.todosService.remove(item.id);
    window.location.reload();
  }

  onConcludeTodo(item: Todo): void {
    console.log(item)
    this.todosService.conclude(item.id);
    window.location.reload();
  }

  ngOnInit(): void {}
}
