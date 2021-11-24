import React, { useEffect } from 'react'
import { useSelector, useDispatch, connect} from 'react-redux'
import { fetchUserRequest, fetchUsers } from '../redux'

function Users(props) {
    // const users = useSelector(state => state.user)
    // const dispatch = useDispatch()
    useEffect(() => {
        props.fetchUsers()
    }, [])

    console.log(props, 'adlfjalfja')
    return <> 
    {/* <div onClick={props.fetchData()}>li</div> */}
    {/* {props.userData.loading && <div>loading...</div>}
    {props.userData.users && console.log(props.userData)} */}
    <div onClick={() => props.fetchUsers()}>li</div> {props.userData.loading ? (<h1>Loading...</h1>) : props.userData.error ? (<h2>{props.userData.error}</h2>) : (<><h2>User List</h2>{props.userData.users && props.userData.users.map(user =><ul key={user.id}>{user.username}</ul>)}</>)}
    </>
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
