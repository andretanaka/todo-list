import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { updateTodoService, removeTodoService } from 'services'

import getTodosList from 'redux/effects/Todos'
import { ITodo } from 'redux/types/TodoTypes'

import { InputText } from 'components/atoms'

import * as s from './styles'

const Task = ({
  id,
  name,
  completed,
}: Omit<ITodo, 'inserted_at' | 'updated_at'>): JSX.Element => {
  const [newName, setNewName] = useState(name)
  const dispatch = useDispatch()

  useEffect(() => {
    setNewName(name)
  }, [name])

  function onClickHandler() {
    updateTodoService(id, newName, !completed).then(() =>
      dispatch(getTodosList())
    )
  }

  function onBlurHandler() {
    updateTodoService(id, newName, completed).then(() =>
      dispatch(getTodosList())
    )
  }

  const deleteTodo = () => {
    removeTodoService(id).then(() => {
      dispatch(getTodosList())
    })
  }

  return (
    <s.Container key={id}>
      <s.Checkbox
        checked={completed}
        onClick={() => onClickHandler()}
        onChange={() => null}
      />
      <InputText
        value={newName}
        onChangeHandler={setNewName}
        onBlurHandler={onBlurHandler}
        icon="delete"
        onClickImage={() => deleteTodo()}
        todoCompleted={completed}
      />
    </s.Container>
  )
}

export default Task
