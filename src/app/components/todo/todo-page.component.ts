import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  public todos$: Observable<Todo[]>;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.getTodos();
  }

  public ngOnInit() {
    this.todoService.fetchTodos().subscribe();
  }

  public addTodo(todo: Todo): void {
    this.todoService.saveTodo(todo).subscribe((a) => console.log(a));
  }
}
