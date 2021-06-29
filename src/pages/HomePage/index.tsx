import { Text, InputText } from 'components/atoms'
import Task from 'components/molecules'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getTodosList from 'redux/effects/Todos'
import { Todo } from 'redux/interfaces/Todo'
import { AppState } from 'redux/store'
import { removeTodoService, createTodoService } from 'services'

const HomePage = (): JSX.Element => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTodosList())
  }, [dispatch])
  const { todos, isLoading, hasError } = useSelector(
    (state: AppState) => state.todos
  )
  const [todoId, setTodoId] = useState(-1)
  const [todoName, setTodoName] = useState('')

  const deleteTodo = (id: number) => {
    removeTodoService(id).then(() => dispatch(getTodosList()))
  }

  const addTodo = (name: string) => {
    createTodoService(name).then(() => dispatch(getTodosList()))
  }

  const todoItems = todos
    .sort((a, b) => a.id - b.id)
    .map((todo: Todo) => {
      return <Task id={todo.id} name={todo.name} completed={todo.completed} />
    })

  return (
    <>
      <Text>TODO LIST!</Text>
      <Text>ID:</Text>
      <InputText onChange={(event) => setTodoId(+event.target.value)} />
      <hr />
      <Text>NOME:</Text>
      <InputText onChange={(event) => setTodoName(event.target.value)} />
      <button type="button" onClick={() => deleteTodo(todoId)}>
        Deletar
      </button>
      <button type="button" onClick={() => addTodo(todoName)}>
        ADICIONAR
      </button>
      {todoItems}
    </>
  )
}

export default HomePage
