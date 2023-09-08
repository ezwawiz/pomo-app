'use client'

import { useState, useEffect, useRef } from "react"
import Timer from "./Timer";

const Main = () => {

    const POMODORO = 1;
    const SHORTBREAK = 2;
    const LONGBREAK = 3;

    const [inProgress, setInProgress] = useState(false)

    const [pomo, setPomo] = useState(POMODORO);
    const [shortBreak, setShortBreak] = useState(SHORTBREAK);
    const [longBreak, setLongBreak] = useState(LONGBREAK);
    const [seconds, setSeconds] = useState<number>(pomo /* * 60 */);

    const durationID = useRef<number>(0);
    const workCount = useRef<number>(0);

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

    const timeCompleted = () => {
        if (durationID.current == 0) {
            ++workCount.current;
            console.log("work count is " + workCount.current);
        }
        reset();
        nextDuration();
    }

    const nextDuration = () => {

        if (durationID.current == 0) {
            if (workCount.current % 4 == 0) {
                durationID.current = 2;
            } else {
                durationID.current = 1;
            }
        }
        else if (durationID.current == 1 || durationID.current == 2) { durationID.current = 0 }

        const id = durationID.current;
        console.log("current id is " + id);

        changeDuration(id);
    }

    const reset = () => {
        setInProgress(false);

        setPomo(POMODORO);
        setShortBreak(SHORTBREAK);
        setLongBreak(LONGBREAK);

        if (durationID.current == 0) {
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
    }, [seconds, inProgress, timeCompleted])

    return (
        <div>
            <Timer inProgress={inProgress} getTime={getTime} durationChange={changeDuration} startTimer={startTimer} reset={reset} nextDuration={nextDuration} />
        </div>
    )
}

export default Main;
