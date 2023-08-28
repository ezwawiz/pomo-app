'use client'
import { useState } from "react"
import Navbar from "./Navbar"
import Timer from "./Timer"

export default function Home() {

  const [duration, setDuration] = useState<number>(100)
  
  const [smallBreak, setSmallBreak] = useState<number>(300)
  const [longBreak, setLongBreak] = useState<number>(600)
  const [workDuration, setWorkDuration] = useState<number>(1500)




  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
  }


  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-2 font-semibold">
          <button onClick={() => setDuration(600)} className="bg-sky-500 hover:bg-sky-600 py-1 px-3 rounded text-white border border-neutral-600">Short Break</button>
          <button onClick={() => setDuration(3000)} className="bg-neutral-800 hover:bg-neutral-700 p-1 px-3 rounded text-white border border-neutral-600">Work</button>
          <button onClick={() => setDuration(1800)} className="bg-indigo-500 hover:bg-indigo-700 p-1 px-3 rounded text-white border border-neutral-600">Long Break</button>
        </div>
        <h1 className="text-9xl font-extrabold mt-10">{formatTime(duration)}</h1>
        <Timer seconds={3000}/>
      </div>
    </div>
  )
}
