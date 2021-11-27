import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import userReducer from './user/userReducer'
import todoReducer from './todo/todoReducer'
import filtersReducer from './filter/filterReducer'

const rootReducer = combineReducers({
    counter : counterReducer,
    user: userReducer,
    todos: todoReducer,
    filters: filtersReducer
})

export default rootReducer