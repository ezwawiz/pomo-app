'use client'

import { useState, useEffect, useRef } from "react"
import Navbar from "./components/Navbar"
import Timer from "./components/Timer";

export default function Home() {

  const POMODORO = 1;
  const SHORTBREAK = 2;
  const LONGBREAK = 3;

  const [inProgress, setInProgress] = useState(false)

  const [pomo, setPomo] = useState(POMODORO);
  const [shortBreak, setShortBreak] = useState(SHORTBREAK);
  const [longBreak, setLongBreak] = useState(LONGBREAK);
  const [seconds, setSeconds] = useState<number>(pomo /* * 60 */);

  const durationID = useRef<number>(0);
  const workCount = useRef<number>(0)

  const getTime = () => {
    return seconds;
  }

  const changeDuration = (id: number) => {
    reset();
    durationID.current = id;
    console.log(durationID.current);

    if (id == 0) { return setSeconds(pomo /* * 60) */) }
    else if (id == 1) { return setSeconds(shortBreak /* * 60 */) }
    else if (id == 2) { return setSeconds(longBreak /* * 60 */) }
  }

  const startTimer = () => {
    setInProgress(inProgress => !inProgress);
  }

  const workSessionCompleted = () => {
    console.log("You just earned a long break! Take a rest!")
    reset();
    workCount.current = 0;
    changeDuration(2);
  }

  const timeCompleted = () => {
    if (durationID.current == 0 && workCount.current != 4) {
      ++workCount.current;
      console.log("work count is " + workCount.current);
      // if (workCount.current == 4) { return workSessionCompleted }
    } 
    
    if (workCount.current == 4) { 
      console.log('work count is 4 so we are right before workSessionCompleted!');
      reset();
      console.log('we just reset!');
      workCount.current = 0;
      console.log('we just reset workcount! work count is ' + workCount.current);
      changeDuration(2);
      // workSessionCompleted; 
    } else {
      reset();
      nextDuration();
    }

  }

  const nextDuration = () => {
    // durationID.current = (durationID.current + 1) % 3;

    if (durationID.current == 0) { durationID.current = 1 }
    else if (durationID.current == 1) { durationID.current = 0 }
    else if (durationID.current == 2) { durationID.current = 0 }

    const id = durationID.current;
    console.log("current id is " + id);

    changeDuration(id);
  }

  const reset = () => {
    setInProgress(false);

    setPomo(POMODORO);
    setShortBreak(SHORTBREAK);
    setLongBreak(LONGBREAK);

    if(durationID.current == 0) {
      setSeconds(pomo);
    } else if (durationID.current == 1) {
      setSeconds(shortBreak);
    } else {
      setSeconds(longBreak);
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      if (inProgress) {
        setSeconds(prev => --prev)
        if (seconds < 1) {

          timeCompleted();

        }
      }
    }, 1000);

    return () => { clearInterval(timer); }
  }, [seconds, timeCompleted])

  return (
    <div>
      <Navbar />
      <Timer inProgress={inProgress} getTime={getTime} durationChange={changeDuration} startTimer={startTimer} reset={reset} nextDuration={nextDuration} />
    </div>
  )
}
