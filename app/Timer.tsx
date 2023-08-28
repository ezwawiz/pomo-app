'use client';

import { useEffect, useState } from "react";

interface TimerProps {
    seconds: number, 
}

const Timer: React.FC<TimerProps> = ({ seconds }) => {
    
    function formatTime(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedSeconds = String(remainingSeconds).padStart(2, '0');

        return `${formattedMinutes}:${formattedSeconds}`;
    }

    const [duration, setDuration] = useState(seconds);

    useEffect(() => {
        // Update duration with the seconds prop to start with the correct initial value
        setDuration(seconds);

        const interval = setInterval(() => {
            setDuration((prevDuration) => {
                if (prevDuration > 0) {
                    return prevDuration - 1;
                }
                // Return 0 if the countdown is complete
                return 0;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]); // Include seconds as a dependency to update duration when it changes

    return (
        <h1>{formatTime(duration)}</h1>
    );
}

export default Timer;
