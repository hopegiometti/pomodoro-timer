import React, { useState, useEffect } from 'react'

export const Timer = (props) => {
    let convertedTime = {}

    useEffect(() => {
        const timer =
            props.counter > 0 && setInterval(() => props.setCounter(props.counter - 1), 1000);
        return () => clearInterval(timer);
    }, [props.counter])

    const convertTime = (secs) => {
        let divisor_for_minutes = secs % (60 * 60);
        let minutes = Math.floor(divisor_for_minutes / 60);

        let divisor_for_seconds = divisor_for_minutes % 60;
        let seconds = Math.ceil(divisor_for_seconds);
        
        convertedTime = {
            "m": minutes,
            "s": seconds
        };
        return convertedTime;
    }

    return(<>
        {console.log(convertTime(props.counter))}
        <h1>Minutes: {convertedTime["m"]} Seconds: {convertedTime["s"]}</h1>
    </>)
}

export default Timer
