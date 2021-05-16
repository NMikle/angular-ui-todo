import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos$: ReplaySubject<Todo[]> = new ReplaySubject(1);

  constructor(private http: HttpClient) {}

  public getTodos(): Observable<Todo[]> {
    return this.todos$.asObservable();
  }

  public fetchTodos(): Observable<Todo[]> {
    return of(['asdfd', 'hgfgh']).pipe(
      tap((v) => {
        this.todos$.next(v as any[]);
      })
    ) as any;
  }

  public saveTodo(todo: Todo): Observable<Todo[]> {
    return this.http
      .post<Todo[]>('http://192.168.1.43:8080/v1/todo', todo)
      .pipe(
        tap((v) => {
          this.todos$.next(v);
        })
      );
  }
}
