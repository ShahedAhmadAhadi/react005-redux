import { INCREMENT } from "./counterTypes";

const initialState = {
    value : 0
}

const counterReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                value: state.value + 1
            }
        default:
            return state
    }
}

export default counterReducer