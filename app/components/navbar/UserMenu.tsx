'use client'

import { AiOutlineMenu } from "react-icons/ai"
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Modal from "../modals/Modal";
import LoginModal from "../modals/LoginModal";
import RegisterModal from "../modals/RegisterModaL";

const UserMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);


    const toggleOpen = useCallback(() => {
        setOpenMenu(prev => !prev)
        console.log('is opened clicked');

    }, [])

    const handleShowLoginModal = () => {
        setOpenLoginModal(prev => !prev)
    }

    const handleShowSignupModal = () => {
        setOpenSignupModal(prev => !prev)
    }

    // "dark:bg-neutral-800 dark:hover:bg-neutral-600 bg-neutral-200 hover:bg-neutral-100 border dark:border-neutral-700 border-neutral-100 rounded p-1 cursor-pointer"

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={toggleOpen} className="py-1 px-2 dark:bg-neutral-800 bg-neutral-200 border dark:border-neutral-700 border-neutral-100 flex flex-row items-center gap-3 rounded-xl cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu size={24} />
                    <Image className="rounded-full" height={24} width={24} alt="profile" src="/images/placeholder.jpg" />
                </div>
            </div >
            {openMenu && (
                <div className="absolute rounded-xl shadow-md w-40 dark:bg-neutral-800 bg-neutral-200 overflow-hidden right-0 top-12 text-sm border dark:border-neutral-700 border-neutral-100">
                    <div className="flex flex-col cursor-pointer">
                        <MenuItem onClick={handleShowLoginModal} label="Login" />
                        <MenuItem onClick={handleShowSignupModal} label="Sign up" />
                    </div>
                </div>
            )}

            {openLoginModal && <LoginModal handleShowModal={handleShowLoginModal} />}
            {openSignupModal && <RegisterModal handleShowModal={handleShowSignupModal} />}

        </div>
    );
}

export default UserMenu;