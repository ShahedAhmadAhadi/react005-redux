import { ERROR, REQUEST, SUCCESS } from "./userTypes";
import axios from "axios";


export const fetchUserRequest = () => {
    console.log('request')
    return {
        type: REQUEST
    }
}

export const fetchUserSuccess = (users) => {
    console.log('success')
    return {
        type: SUCCESS,
        payload: users
    }
}

export const fetchUserError = (error) => {
    console.log('error')
    return {
        type: ERROR,
        payload: error
    }
}

export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            }).catch(
                error => {
                    const errorMsg = error.message
                    dispatch(fetchUserError(errorMsg))
                }
            )
    }
}