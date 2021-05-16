import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoFC: FormControl;

  @Input()
  public todos: Todo[];

  @Output()
  public addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() {}

  public ngOnInit(): void {
    this.todoFC = new FormControl('', [Validators.required]);
  }

  public addTodoHandler(): void {
    this.addTodo.emit({
      id: 3,
      content: this.todoFC.value,
    });
    this.todoFC.patchValue('');
  }
}
