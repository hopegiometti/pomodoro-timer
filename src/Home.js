import React, { useState, useEffect } from 'react'

export const Home = (props) => {
    const [counter, setCounter] = useState(60)
    const [start, setStart] = useState(false)

    // useEffect(() => {
    //     const timer =
    //         counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    //     return () => clearInterval(timer);
    // }, [counter])

    const startTimer = () => {
        console.log("hi")
        setStart(true)
        timer()
    }

    const timer = () => {
        if (counter > 0) {
            setInterval(() => setCounter(counter-1), 1000)
        } else {
            // setCounter(60)
            // setStart(false)
            return () => clearInterval()
        }
    }

    return(<>
        {start ? <><h1>Time Remaining: {counter}</h1></> : <h1>Click to Start Your Timer!</h1>}
        <button onClick={startTimer}>Start Timer</button>
    </>)
}

export default Home