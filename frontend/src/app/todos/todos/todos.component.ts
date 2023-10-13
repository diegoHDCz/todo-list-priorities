import { Observable } from 'rxjs';
import { TodosService } from './../services/todos.service';
import { Component } from '@angular/core';
import { Todo } from '../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent {
  todos: Observable<Todo[]>;

  displayedColumns = ['id', 'title', 'assignee', 'action'];
  constructor(private todosService: TodosService) {
    this.todos = this.todosService.list();
  }

  ngOnInit(): void {}
}
