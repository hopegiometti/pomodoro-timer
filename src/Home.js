import React, { useState, useEffect } from 'react'
import Timer from './Timer'

export const Home = (props) => {
    const [counter, setCounter] = useState(60)
    const [start, setStart] = useState(false)

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter])

    const startTimer = () => {
        console.log("hi")
        setStart(true)
    }

    // const timer = () => {
        // if (counter > 0) {
        //     setInterval(() => setCounter(counter-1), 1000)
        // } else {
        //     setCounter(60)
        //     setStart(false)
        //     return () => clearInterval()
        // }
        // useEffect(() => {
            // const t =
                // counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            // return () => clearInterval(t);
        // }, [counter])
    // }

    return(<>
        {start ? <><h1>Time Remaining: {counter}</h1><Timer setCounter={setCounter} counter={counter}/></> : <h1>Click to Start Your Timer!</h1>}
        <button onClick={startTimer}>Start Timer</button>
    </>)
}

export default Home