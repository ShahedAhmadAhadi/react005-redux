import React from 'react'
import { store } from '../redux/store'

function Prac() {
    const selectedValue = state => state.counter.value
    const currentValue =  selectedValue(store.getState())
    console.log(currentValue, 'aksdjflajd')
    return (
        <div>
            {}
        </div>
    )
}

export default Prac
