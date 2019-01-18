import { TodoListModule } from '@actions/todo-list.action';
import { TodoListState } from '@models/todo';
import { todosMock } from '@mocks/todo-list-data';

// les valeurs par défaut du state
const initialState: TodoListState = {
  data: [],
  loading: false,
  loaded: false,
  selectTodo: undefined
};

// la fonction reducer de la todo
export function todosReducer(
  state: TodoListState = initialState,
  action: TodoListModule.Actions
): TodoListState {
  switch (action.type) {
    // L'action de InitTodos
    case TodoListModule.ActionTypes.INIT_TODOS:
      return {
        ...state,
        data: [
          ...action.payload
        ]
      };

    case TodoListModule.ActionTypes.CREATE_TODO:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case TodoListModule.ActionTypes.DELETE_TODO:
      return {
        ...state,
        data: state.data.filter(todo => todo.id !== action.payload)
      };

    case TodoListModule.ActionTypes.SELECT_TODO:
      return {
        ...state,
        selectTodo: action.payload
      };

    case TodoListModule.ActionTypes.UPDATE_TODO:
      return {
        ...state,
        data: state.data.map(todo => {
          if (action.payload.id === todo.id) {
            return action.payload;
          }
          return todo;
        })
      };
    default:
      return state;
  }
}
