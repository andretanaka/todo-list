import { v4 } from 'uuid'

import { useSelector } from 'react-redux'
import { AppState } from 'redux/store'
import { ITodo } from 'redux/types/TodoTypes'

import { Todo } from 'components/molecules'

const TodosList = (): JSX.Element => {
  const { todos } = useSelector((state: AppState) => state.todos)
  const todoList = todos
    .sort((a, b) => a.id - b.id)
    .map(({ id, name, completed }: ITodo) => {
      return <Todo key={v4()} id={id} name={name} completed={completed} />
    })
  return <>{[...todoList]}</>
}

export default TodosList
