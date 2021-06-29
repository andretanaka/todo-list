import { Dispatch } from 'redux'
import { GetTodosListAction } from 'redux/actions/TodoActions'
import { getTodoListService } from 'services/index'

import { TodoActionTypes } from 'redux/types/TodoTypes'

const getTodosList = () => {
  return (dispatch: Dispatch<TodoActionTypes>): void => {
    getTodoListService().then((data) => {
      dispatch(GetTodosListAction(data))
      return data
    })
  }
}

export default getTodosList
