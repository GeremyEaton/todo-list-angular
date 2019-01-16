import { createSelector } from '@ngrx/store';
import { AppState } from '../index';

// La première fonction amène vers le state todos
export const selectTodoListState$ = (state: AppState) => state.todos;

// Et à partir de celle-ci, on créer une autre fonction qui renverra data
export const selectTodos$ = createSelector(
  selectTodoListState$,
  todos => todos.data
);

export const selectTodosOrderByIdDescending$ = createSelector(
  selectTodoListState$,
  todos => todos.data.sort((a, b) => b.id - a.id)
);
