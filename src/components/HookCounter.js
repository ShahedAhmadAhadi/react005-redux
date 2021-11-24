import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { fetchUsers, updateCounter } from '../redux'

function HookCounter() {
    const value = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>Counter - {value}</div>
            <button onClick={() => dispatch(updateCounter())}>Increment</button>
        </div>
    )
}

export default HookCounter