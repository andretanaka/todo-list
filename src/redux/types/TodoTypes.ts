export interface ITodo {
  id: number
  name: string
  completed: boolean
  inserted_at: string
  updated_at: string
}

export const Types = {
  GET_TODOS_LIST: 'GET_TODOS_LIST',
}

export interface TodoStateType {
  todos: ITodo[]
}

export interface TodoActionTypes {
  type: keyof typeof Types
  payload: ITodo[]
}
