import { combineReducers } from 'redux'
import getTodosReducer from './TodoReducer'

const rootReducer = combineReducers({
  todos: getTodosReducer,
})

export default rootReducer
