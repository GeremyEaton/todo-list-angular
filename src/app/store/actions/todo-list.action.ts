import { Todo } from '@models/todo';

export namespace TodoListModule {
  export enum ActionTypes {
    INIT_TODOS = '[todoList] Init Todos',
    CREATE_TODO = '[todoList] Create Todo',
    DELETE_TODO = '[todoList] Delete Todo',
    SELECT_TODO = '[todoList] Select Todo',
    UPDATE_TODO = '[todoList] Update Todo'
  }

  export class InitTodos {
    readonly type = ActionTypes.INIT_TODOS;
    constructor(public payload: Todo[]) {}
  }

  export class CreateTodo {
    readonly type = ActionTypes.CREATE_TODO;
    constructor(public payload: Todo) {}
  }

  export class DeleteTodo {
    readonly type = ActionTypes.DELETE_TODO;
    constructor(public payload: number) {}
  }

  export class SelectTodo {
    readonly type = ActionTypes.SELECT_TODO;
    constructor(public payload: Todo) {}
  }

  export class UpdateTodo {
    readonly type = ActionTypes.UPDATE_TODO;
    constructor(public payload: Todo) {}
  }

  export type Actions =
    | InitTodos
    | CreateTodo
    | DeleteTodo
    | SelectTodo
    | UpdateTodo;
}
