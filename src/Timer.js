import React, { useState, useEffect } from 'react'

export const Timer = (props) => {
    useEffect(() => {
        const timer =
            props.counter > 0 && setInterval(() => props.setCounter(props.counter - 1), 1000);
        return () => clearInterval(timer);
    }, [props.counter])

    return(<>
    </>)
}

export default Timer