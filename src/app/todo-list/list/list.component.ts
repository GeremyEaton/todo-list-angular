import { Component, OnInit } from '@angular/core';

import { Todo } from '../models/todo';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { select, Store } from '@ngrx/store';
import { TodoListModule } from '../store/actions/todo-list.action';
import { selectTodos$ } from '../store/selectors/todo-list.selector';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todos$: Observable<Todo[]>;

  constructor(private store: Store<AppState>) {
    this.todos$ = store.pipe(select(selectTodos$));
  }

  ngOnInit() {
    this.store.dispatch(new TodoListModule.InitTodos());
  }
}
