import { ITodo } from 'redux/types'
import axiosInstance from './apiConfig'

export const getTodoService = async (id: number): Promise<ITodo> => {
  const response = await axiosInstance.get(`/todos/${id}`)
  return response.data
}

export const getTodoListService = async (): Promise<ITodo[]> => {
  const response = await axiosInstance.get(`/todos`)
  return response.data
}

export const createTodoService = async (name: string): Promise<void> => {
  const payload = { name }
  await axiosInstance.post(`/todos`, payload)
}

export const updateTodoService = async (
  id: number,
  name: string,
  completed: boolean
): Promise<void> => {
  const payload = { name, completed }
  await axiosInstance.put(`/todos/${id}`, payload)
}

export const removeTodoService = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/todos/${id}`)
}
