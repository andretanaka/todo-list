import { Types, TodoStateType, TodoActionTypes } from 'redux/types/TodoTypes'

const INITIAL_STATE: TodoStateType = {
  todos: [],
  isLoading: false,
  hasError: false,
}

const getTodosReducer = (
  state = INITIAL_STATE,
  action: TodoActionTypes
): TodoStateType => {
  switch (action.type) {
    case Types.GET_TODOS_LIST:
      return {
        ...state,
        todos: action.payload,
      }
    case Types.SET_LOADING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      }
    case Types.SET_ERROR:
      return {
        ...state,
        todos: action.payload,
        isLoading: false,
        hasError: true,
      }
    default:
      return state
  }
}

export default getTodosReducer
