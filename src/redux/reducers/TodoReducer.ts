import { Types, TodoStateType, TodoActionTypes } from 'redux/types/TodoTypes'

const INITIAL_STATE: TodoStateType = {
  todos: [],
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
    default:
      return state
  }
}

export default getTodosReducer
