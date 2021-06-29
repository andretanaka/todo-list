import { Types } from 'redux/types/TodoTypes'
import { Todo } from 'redux/interfaces/Todo'

export const GetTodosListAction = (
  todos: Todo[]
): {
  type: keyof typeof Types
  payload: Todo[]
} => {
  return {
    type: 'GET_TODOS_LIST',
    payload: todos,
  }
}

export const SetIsLoading = (): { type: keyof typeof Types } => {
  return {
    type: 'SET_LOADING',
  }
}

export const SetHasError = (): { type: keyof typeof Types } => {
  return {
    type: 'SET_ERROR',
  }
}
