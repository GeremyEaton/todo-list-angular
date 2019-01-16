import { Component, OnInit, Inject } from '@angular/core';

import { Todo } from '../models/todo';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap, first } from 'rxjs/operators';
import { AppState } from '../store';

import { TodoListModule } from '../store/actions/todo-list.action';

import {
  selectTodos$,
  selectTodosOrderByIdDescending$
} from '../store/selectors/todo-list.selector';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-list--list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos$: Observable<Todo[]>;
  lastIndexTodos$: any;

  public todoForm: FormGroup;

  todosLength: number;

  constructor(
    private store: Store<AppState>,
    @Inject(FormBuilder) formbuilder: FormBuilder
  ) {
    this.todos$ = store.pipe(select(selectTodosOrderByIdDescending$));

    this.todoForm = formbuilder.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });
  }

  createTodo(todo: Todo) {
    if (!todo.title) {
      return null;
    }

    const payload = {
      ...todo,
      userId: 1,
      id: this.todosLength
    };
    this.todosLength++;

    this.store.dispatch(new TodoListModule.CreateTodo(payload));
    this.resetForm();
  }

  deleteTodo(_event: Event, _todo: Todo) {
    _event.stopPropagation();
    this.store.dispatch(new TodoListModule.DeleteTodo(_todo.id));
  }

  editTodo(_event: Event, _todo: Todo) {
    _event.stopPropagation();
  }

  resetForm() {
    return this.todoForm.reset();
  }

  ngOnInit() {
    this.store.dispatch(new TodoListModule.InitTodos());
    this.lastIndexTodos$ = this.store.pipe(select(selectTodos$), first()).subscribe(todos => {
      this.todosLength = todos.length + 1;
    });
  }
}
