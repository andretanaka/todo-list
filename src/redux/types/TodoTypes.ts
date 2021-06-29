import { Todo } from 'redux/interfaces/Todo'

export const Types = {
  GET_TODOS_LIST: 'GET_TODOS_LIST',
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_LOADING',
}

export interface TodoStateType {
  todos: Todo[]
  isLoading: boolean
  hasError: boolean
}

export interface TodoActionTypes {
  type: keyof typeof Types
  payload: Todo[]
}
