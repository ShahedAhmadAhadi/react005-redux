import React from 'react'
import { connect } from 'react-redux'
import { updateCounter } from '../redux'


function Counter(props) {
  console.log(props)
    return (
        <div>
            <div>Counter = {props.value}</div>
            <button onClick={() => props.updateCounter()}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
  return {
    value : state.counter.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCounter: () => dispatch(updateCounter())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
