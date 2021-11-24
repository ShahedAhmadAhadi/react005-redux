import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCounter } from '../redux'

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
