import React from 'react'
import { store } from '../app/store'

function increment() {
    return {
      type: 'counter/increment'
    }
  }

store.dispatch(increment())
function Counter() {
    console.log(store.getState())
    return (
        <div>
            <div>Counter = {store.getState().counter.value}</div>
            <button onClick={() => store.dispatch({type : 'counter/increment'})}>Increment</button>
        </div>
    )
}

export default Counter
