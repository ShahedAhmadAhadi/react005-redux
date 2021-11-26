import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { fetchUsers } from '../redux'

function UsersList(props) {    
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const state = useSelector(state => state.user)

    console.log(state, 'adlfjalfja')
    return <>
    <div>li</div> {state.loading ? (<h1>Loading...</h1>) : state.error ? (<h2>{state.error}</h2>) : (<><h2>User List</h2>{state.users && state.users.map(user =><ul key={user.id}>{user.username}</ul>)}</>)}
    </>
}

export default UsersList
