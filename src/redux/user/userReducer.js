import { LOADING, SUCCESS, ERROR} from './userActions'

const initialState = {
    loading: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOADING:
            return {
                ...state,
                loading: true
            }
        case SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case ERROR:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload
            }    
        default:
            return state
    }
}

export default userReducer