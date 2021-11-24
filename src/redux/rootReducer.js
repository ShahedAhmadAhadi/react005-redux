import { combineReducers } from 'redux'
import counterReducer from './counter/counterReducer'
import userReducer from './user/userReducer'

const rootReducer = combineReducers({
    counter : counterReducer,
    user: userReducer
})

export default rootReducer