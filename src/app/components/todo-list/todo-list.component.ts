import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  public todoFC: FormControl;

  @Input()
  public todos: string[];

  constructor() {}

  ngOnInit(): void {
    this.todoFC = new FormControl('', [Validators.required]);
  }
}
