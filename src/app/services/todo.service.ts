import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Todo} from "../models/todo.model";

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  public getTodos(): Observable<string[]> {
    return of(['asdfd', 'hgfgh']);
  }

  public saveTodo(model: Todo): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:8080/v1/todo', model);
  }
}
