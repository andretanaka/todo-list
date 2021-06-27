import { ITodo } from 'store/types'
import axiosInstance from './apiConfig'

export const getTodo = async (id: number): Promise<ITodo> => {
  const response = await axiosInstance.get(`/todos/${id}`)
  return response.data
}

export const getTodoList = async (): Promise<ITodo[]> => {
  const response = await axiosInstance.get(`/todos`)
  return response.data
}

export const createTodo = async (name: string): Promise<void> => {
  const payload = { name }
  await axiosInstance.post(`/todos`, payload)
}

export const updateTodo = async (todo: ITodo): Promise<void> => {
  const payload = { name: todo.name, completed: todo.completed }
  await axiosInstance.put(`/todos/${todo.id}`, payload)
}

export const removeTodo = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/todos/${id}`)
}
