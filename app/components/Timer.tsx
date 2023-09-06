'use client'

import { IoPlaySkipForwardOutline } from "react-icons/io5";

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
                <button onClick={() => durationChange(0)} className="bg-neutral-800 active:bg-neutral-700 p-1 px-3 rounded text-white ">Work</button>
                <button onClick={() => durationChange(2)} className="bg-indigo-500 active:bg-indigo-700 p-1 px-3 rounded text-white">Long Break</button>

                {/* <button className="text-lg px-4 border border-neutral-800 rounded-lg hover:bg-lime-400/40 focus:bg-lime-400 active:scale-105 transition">Winner</button> */}
            </div>


            {/* <div className="mx-auto flex w-2/4 justify-between gap-6 rounded-xl border border-neutral-800 text-white text-xl">
                <button className="scale-90 rounded-lg p-2 transition duration-300 hover:bg-blue-500/80 focus:bg-blue-500">Short Break</button>
                <button className="scale-90 rounded-lg p-2 transition duration-300 hover:bg-lime-500/80 focus:bg-lime-500 active:scale-95">Winner</button>
                <button className="scale-90 rounded-lg px-4 transition duration-300 hover:bg-violet-500/80 focus:bg-violet-500">Long Break</button>


            </div> */}


            {/* 
            <div className="flex gap-16 border border-neutral-700 rounded-lg">
                <button className="p-2 ml-6 hover:bg-cyan-400 bg-contain hover:border border-cyan-400 rounded">Short Break</button>
                <button>Work </button>
                <button className="mr-6">Long Break</button>
            </div> */}

            <h1 className="text-9xl font-extrabold my-20">{formatTime(getTime())}</h1>

            <div className="flex gap-16">

                <div className="flex items-center">

                    <button onClick={startTimer} className="text-white bg-red-500 active:bg-red-700 text-5xl font-semibold py-2 px-5 rounded-lg active:scale-95">{inProgress ? "PAUSE" : "START"}</button>

                    {inProgress && <div onClick={nextDuration} className="text-6xl text-neutral-800 text-opacity-1 border-2 border-neutral-800 rounded-xl ml-4"> <IoPlaySkipForwardOutline /> </div>}

                </div>

                <button onClick={reset} className="bg-neutral-400 text-2xl px-4 rounded">RESET</button>
            </div>

        </div>
    );
}

export default Timer;


