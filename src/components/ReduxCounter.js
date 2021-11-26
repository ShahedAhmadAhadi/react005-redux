import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../redux/counterSlice'

function ReduxCounter() {
    const state = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div>
            <div>count - {state}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
        </div>
    )
}

export default ReduxCounter
