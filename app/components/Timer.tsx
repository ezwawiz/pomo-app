'use client'

import { IoPlaySkipForwardOutline, IoChevronForward } from "react-icons/io5";

interface TimerProps {
    inProgress: boolean,
    getTime: () => number,
    durationChange: (durationID: number) => void,
    startTimer: () => void,
    reset: () => void,
    nextDuration: () => void,

}

function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

const Timer: React.FC<TimerProps> = ({
    inProgress,
    getTime,
    durationChange,
    startTimer,
    reset,
    nextDuration,
}) => {

    return (
        <div className="flex flex-col justify-center items-center">

            <div className="flex gap-6 font-semibold">
                <button onClick={() => durationChange(1)} className="bg-sky-500 active:bg-sky-600 py-1 px-3 rounded text-white">Short Break</button>
                <button onClick={() => durationChange(0)} className="bg-neutral-800 active:bg-neutral-800 active:scale-110 hover:bg-neutral-500 p-1 px-3 rounded text-white">Work</button>
                <button onClick={() => durationChange(2)} className="bg-indigo-500 active:bg-indigo-700 p-1 px-3 rounded text-white">Long Break</button>
            </div>

            <h1 className="text-9xl font-extrabold my-20">{formatTime(getTime())}</h1>

            <div className="flex gap-16">

                <div className="flex items-center">

                    <button onClick={startTimer} className="text-white bg-rose-500 active:bg-rose-700 text-5xl font-semibold py-2 px-5 rounded-lg active:scale-95">{inProgress ? "PAUSE" : "START"}</button>

                    {inProgress &&

                        <button onClick={nextDuration} className="flex items-center text-neutral-600 ml-6 opacity-60 cursor-pointer">
                            <p className="text-2xl">Next</p>
                            <IoChevronForward className="text-4xl text-opacity-1 rounded-xl" />
                        </button>

                    }

                </div>

                <button onClick={reset} className="bg-neutral-300 text-black text-2xl px-4 rounded">RESET</button>
            </div>

        </div>
    );
}

export default Timer;


