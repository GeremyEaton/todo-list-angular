import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { TodoListModule } from '@actions/todo-list.action';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppState } from '@storeConfig';
import { Todo } from '@models/todo';
import { Observable } from 'rxjs';
import { selectTodos$, selectTodoSelected$ } from '@selectors/todo-list.selector';

@Component({
  selector: 'app-select-todo',
  templateUrl: './select-todo.component.html',
  styleUrls: ['./select-todo.component.scss']
})
export class SelectTodoComponent implements OnInit {
  public updateTodoForm: FormGroup;
  public selectTodo$: Observable<Todo>;
  public selectTodo: Todo;

  constructor(
    private store: Store<AppState>,
    private router: Router,
    @Inject(FormBuilder) fb: FormBuilder
  ) {
    this.selectTodo$ = store.pipe(
      select(selectTodoSelected$),
      tap(selectTodos => {
        this.selectTodo = selectTodos;
      })
    );

    this.selectTodo$.subscribe();

    this.updateTodoForm = fb.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });
  }
  ngOnInit() {
    if (this.selectTodo) {
      this.updateTodoForm.patchValue({
        title: this.selectTodo.title,
        completed: this.selectTodo.completed
      });
    }
  }

  updateTodo(formValue) {
    const payload = Object.assign(this.selectTodo, formValue);
    this.store.dispatch(new TodoListModule.UpdateTodo(payload));
    return this.router.navigate(['/todo-list/list']);
  }
}
