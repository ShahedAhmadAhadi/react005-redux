import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'

function Users(props) {
    const users = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(() => props.fetchUsers())
    }, [])

    console.log(props)
    return (
        <div>
            
        </div>
    )
}

export default Users
