import { ITodo, Types } from 'redux/types/TodoTypes'

export const GetTodosListAction = (
  todos: ITodo[]
): {
  type: keyof typeof Types
  payload: ITodo[]
} => {
  return {
    type: 'GET_TODOS_LIST',
    payload: todos,
  }
}
