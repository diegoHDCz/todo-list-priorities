import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { MessagesService } from 'src/app/services/messages.service';

import { Todo } from '../model/todo';

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

  private log(message: string) {
    this.messageService.add(`HeroSerivce: ${message}`);
  }
  list(): Observable<Todo[]> {
    return this.httpClient
      .get<Todo[]>(this.API)
      .pipe(tap((todos) => todos));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
