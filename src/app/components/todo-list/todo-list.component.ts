import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {Observable} from "rxjs";
import {TodoService} from "../../services/todo.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoFC: FormControl;

  @Input()
  public todos: string[];

  constructor(private service: TodoService) {}

  public ngOnInit(): void {
    this.todoFC = new FormControl('', [Validators.required]);
  }

  public addTodo(): Observable<any> {
    this.service.saveTodo({
      id: 3,
      content: 'lol'
    }).subscribe(a => console.log(a))
    return null;
  }
}
