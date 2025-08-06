import React, { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    const increamentCount = () => {
        console.log('text')
        setCount(count + 1)
    }
    const decreamentCount = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }

    return (
        <div>
            <h1>Counter :{count}</h1>

            <button onClick={decreamentCount} >-</button>
            <button onClick={reset}>reset</button>
            <button onClick={increamentCount}>+ </button>

        </div>
    )
}

export default Counter