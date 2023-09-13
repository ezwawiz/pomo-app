'use client'

import { useState } from "react"
import { IoSettingsSharp, IoBarChart } from "react-icons/io5"
import UserMenu from "./UserMenu";
import StatsModal from "../modals/StatsModal";
import SettingsModal from "../modals/SettingsModal";

const Navbar = () => {

    const [showStats, setShowStats] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const handleShowStats = () => {
        setShowStats(prev => !prev)
    }

    const handleShowSettings = () => {
        setShowSettings(prev => !prev)
    }

    return (
        <div>
            <nav className="flex items-center justify-end gap-4 p-4 text-3xl mb-10">
                <UserMenu />

                <IoBarChart onClick={handleShowStats} className="dark:bg-neutral-800 dark:hover:bg-neutral-600 bg-neutral-200 hover:bg-neutral-100 border dark:border-neutral-700 border-neutral-100 rounded p-1 cursor-pointer hover:shadow-md transition" />

                <IoSettingsSharp onClick={handleShowSettings} className="dark:bg-neutral-800 dark:hover:bg-neutral-600 bg-neutral-200 hover:bg-neutral-100 border dark:border-neutral-700 border-neutral-100 rounded p-1 cursor-pointer hover:shadow-md transition" />
            </nav>

            {showStats && <StatsModal handleShowModal={handleShowStats} />}
            {showSettings && <SettingsModal handleShowModal={handleShowSettings} />}


        </div>

    );
}

export default Navbar;