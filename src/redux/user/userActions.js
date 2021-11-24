import { ERROR, REQUEST, SUCCESS } from "./userTypes"


export const fetchUserRequest = () => {
    return {
        type: REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    return {
        type: SUCCESS,
        payload: users
    }
}

export const fetchUserError = (error) => {
    return {
        type: ERROR,
        payload: error
    }
}