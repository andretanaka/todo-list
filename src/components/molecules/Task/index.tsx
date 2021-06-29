import { InputText } from 'components/atoms'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from 'redux/types'
import { updateTodoService } from 'services'
import getTodosList from 'redux/effects/Todos'

const Task = ({
  id,
  name,
  completed,
}: Omit<ITodo, 'inserted_at' | 'updated_at'>): JSX.Element => {
  const [newName, setNewName] = useState(name)
  const dispatch = useDispatch()

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
  function onChangeHandler(value: string) {
    setNewName(value)
  }

  return (
    <div key={id}>
      <h1>{id}</h1>
      <InputText
        value={newName}
        id={`${id}`}
        onChange={(event) => onChangeHandler(event.target.value)}
        onBlur={() => onBlurHandler()}
      />
      <input
        type="checkbox"
        checked={completed}
        onClick={() => onClickHandler()}
      />
      {`${completed}`}
    </div>
  )
}

export default Task
