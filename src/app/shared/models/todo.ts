// Interface de la todo
export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

// Interface de notre futur state de todos
export interface TodoListState {
  data: Todo[];
  loading: boolean;
  loaded: boolean;
  selectTodo: Todo;
}
