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
  todos: Todo[]= [];

  displayedColumns = ['id', 'title', 'assignee', 'action'];
  constructor(private todosService: TodosService) {

 this.todosService.list().forEach(data=>{
 if(data){
  this.todos= data.content
 }
})


  }


  ngOnInit(): void {
    console.log("onInit")
    console.log(this.todos)
  }
}
