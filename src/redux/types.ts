export interface ITodo {
  id: number
  name: string
  completed: boolean
  inserted_at: string
  updated_at: string
}

export const ADD_TODO = 'ADD_TODO'
export const GET_TODO = 'GET_TODO'
export const GET_TODO_LIST = 'GET_TODO_LIST'
export const UPDATE_TODO = 'UPDATE_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
