import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

import { Todo } from '@models/todo';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { AppState } from '@storeConfig';

import { TodoListModule } from '@actions/todo-list.action';

import {
  selectTodos$,
  selectTodosOrderByIdDescending$
} from '@selectors/todo-list.selector';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from '../services/todo-list.service';

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
    private router: Router,
    private store: Store<AppState>,
    private todoListService: TodoListService,
    @Inject(FormBuilder) formbuilder: FormBuilder
  ) {
    this.todos$ = store.pipe(select(selectTodosOrderByIdDescending$));

    this.todoForm = formbuilder.group({
      title: ['', Validators.required],
      completed: [false, Validators]
    });
  }

  ngOnInit() {
    this.todoListService.getTodos().subscribe((todos) => {
      this.store.dispatch(new TodoListModule.InitTodos(todos));
    });

    this.lastIndexTodos$ = this.store
      .pipe(
        select(selectTodos$),
        first()
      )
      .subscribe(todos => {
        this.todosLength = todos.length + 1;
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
    this.store.dispatch(new TodoListModule.SelectTodo(_todo));
    this.router.navigate(['/todo-list/select-todo']);
  }

  resetForm() {
    return this.todoForm.reset();
  }

  completedToggle(_todo: Todo, _completedValue: boolean) {
    let updatedTodo = _todo;
    updatedTodo.completed = _completedValue;
    this.store.dispatch(new TodoListModule.UpdateTodo(updatedTodo));
  }
}
