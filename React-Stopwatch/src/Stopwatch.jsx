import { useRef, useState } from "react"
import "./Stopwatch.css"

function StopWatch(){
    const [timer, setTimer] = useState(0)
    const timerRef = useRef(null)

    function handleStart(){
        if(timerRef.current !== null) return

        timerRef.current = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
    }

    function handleStop(){
        clearInterval(timerRef.current)
        timerRef.current = null
    }

    function handleReset(){
        clearInterval(timerRef.current)
        timerRef.current = null
        setTimer(0)
    }

    // ⏱️ Time format
    const minutes = Math.floor(timer / 60)
    const seconds = timer % 60

    const format = (val) => String(val).padStart(2, "0")

    const isRunning = timerRef.current !== null

    return(
        <div className="container">
            <h1 className="title">⏱️ Stopwatch</h1>

            <h2 className="time">
                {format(minutes)} : {format(seconds)}
            </h2>

            <div className="buttons">
                <button onClick={handleStart} disabled={isRunning}>
                    Start
                </button>

                <button onClick={handleStop} disabled={!isRunning}>
                    Stop
                </button>

                <button onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default StopWatch