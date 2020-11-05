import React, { useState, useEffect } from 'react'

export const Home = (props) => {
    const [counter, setCounter] = React.useState(60)

    useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter])

    return(<>
        <h1>Time Remaining: {counter}</h1>
    </>)
}

export default Home