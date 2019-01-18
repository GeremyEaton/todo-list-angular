import { ActionReducerMap } from '@ngrx/store';
import { InjectionToken } from '@angular/core';

import { todosReducer } from '@reducers/todo-list.reducer';
import { TodoListState } from '@models/todo';

// Le root reducer
const reducers = {
  todos: todosReducer
};

export interface AppState {
  todos: TodoListState;
}
// Nécéssaire pour l'AOT
export function getReducers() {
  return reducers;
}
// Nécéssaire pour l'AOT
export const REDUCER_TOKEN = new InjectionToken<ActionReducerMap<AppState>>(
  'Registered Reducers'
);
