import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, of, takeUntil, tap } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';

import { Todo } from '../model/todo';
import { ListTodoDTO } from '../model/listTodoDto';
interface CreateTodoDTO {
  title: string;
  description: string;
  priority: string;
  assignee: string;
  deadline: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private readonly API = 'http://localhost:8080/todo';
  messages: String[] = [];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };
  constructor(
    private httpClient: HttpClient,
    private messageService: MessagesService
  ) {}
  private destroy$ = new Subject<void>();
  private log(message: string) {
    this.messageService.add(`TodosService: ${message}`);
  }
  list(): Observable<ListTodoDTO> {
    return this.httpClient
      .get<ListTodoDTO>(this.API)
      .pipe(
        tap(
          (_) => console.log(_.content),
          catchError(this.handleError<ListTodoDTO[]>('todoService', []))
        )
      );
  }
  remove(id: number): void {
    console.log(id);
    console.log(`${this.API}/${id}`);
    this.httpClient
      .delete(`${this.API}/${id}`)
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.handleError();
        }
      );
  }
  conclude(id: number): void {
    console.log(id);
    this.httpClient.patch(this.API, { id }).subscribe(
      (response) => {
        console.log('PATCH request successful:', response);
      },
      (error) => {
        this.handleError();
        // Handle errors here
      }
    );
  }
  edit(item:Todo){
    const date = new Date(item.deadline);
    this.httpClient.put(this.API, { ...item, deadline: date }).subscribe(
      (response) => {
        console.log('PATCH request successful:', response);
      },
      (error) => {
        this.handleError();
        // Handle errors here
      }
    );
  }

  create(item: CreateTodoDTO): void {
    const date = new Date(item.deadline);
    this.httpClient
      .post(this.API, { ...item, deadline: date })
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (res) => {
          console.log(res);
        },
        (error) => {
          this.handleError();
        }
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
