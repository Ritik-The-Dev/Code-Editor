import React, { useEffect, useState } from 'react'

const CountDown = () => {

    const [Hour,setHour] = useState(0);
    const [Minutes,setMinutes] = useState(0);
    const [Second,setSecond] = useState(0);
    const [ startTimer,SetstartTimer] = useState(false)

    useEffect(() => {
        let interval = null;
        if (startTimer) {
            interval = setInterval(() => 
            {if (Second > 0) {
                    setSecond(Second - 1);
                }
                else if (Minutes > 0) {
                    setMinutes(Minutes - 1);
                    setSecond(60)}
                    else if(Hour > 0 ){
                        setHour(Hour - 1);
                        setMinutes(60);
                    }
                    else{
                        setHour(0)
                        setMinutes(0)
                        setSecond(0)
                         SetstartTimer(false)
                    }
                }, 1000);
                }
        return () => clearInterval(interval);
    }, [startTimer, Minutes, Second]);

    const PauseTimer = ()=>{
        SetstartTimer(false)
    }
    const StartTimer = () => {
        SetstartTimer(true)
    }
  return (
    <div>
      <h1>Countdown</h1>
      <input type="number" value={Hour} onChange={(e)=>setHour(e.target.value)} />
      <p>Hours</p>
      <input type="number" value={Minutes} onChange={(e)=>setMinutes(e.target.value)} />
      <p>Minutes</p>
      <input type="number" value={Second} onChange={(e)=>setSecond(e.target.value)} />
        <p>Seconds</p>
    <button onClick={StartTimer}>Start</button>
    <button
    onClick={startTimer === true ? PauseTimer : StartTimer}
    >Pause/Resume</button>
    <button onClick={()=>{
        setHour(0)
        setMinutes(0)
        setSecond(0)
        SetstartTimer(false)
    }}>Reset</button>
    </div>
  )
}

export default CountDown
