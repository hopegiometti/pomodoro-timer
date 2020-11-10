import React, { useState, useEffect } from 'react'
import Timer from './Timer'

export const Home = (props) => {
    const [counter, setCounter] = useState(65)
    const [start, setStart] = useState(false)
    const [timerButton, setTimerButton] = useState("start")
    const [justReset, setJustReset] = useState(false)

    const startTimer = () => {
        setStart(true)
        setTimerButton("stop")
    }

    const stopTimer = () => {
        setStart(false)
        setTimerButton("start")
        setJustReset(false)
    }

    const resetTimer = () => {
        setCounter(65)
        setTimerButton("start")
        setJustReset(true)
    }

    const renderButtons = () => {
        if (timerButton === "start" && counter < 65 && justReset === false) {
           return <><button onClick={startTimer}>Start Timer</button><button onClick={resetTimer}>Reset</button></>
        } else if (timerButton === "start" && counter === 65){
           return <button onClick={startTimer}>Start Timer</button>
        } else {
            return <><button onClick={stopTimer}>Stop Timer</button><button onClick={resetTimer}>Reset</button></>
        }
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
        {/* {timerButton === "start" ? <><button onClick={startTimer}>Start Timer</button><button onClick={resetTimer}>Reset</button></> : <><button onClick={stopTimer}>Stop Timer</button><button onClick={resetTimer}>Reset</button></>} */}
        {renderButtons()}
    </>)
}

export default Home