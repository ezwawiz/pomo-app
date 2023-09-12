'use client'

import { AiOutlineMenu } from "react-icons/ai"
import Image from "next/image";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";
import Modal from "../modals/Modal";

const UserMenu = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const toggleOpen = useCallback(() => {
        setOpenMenu(prev => !prev)
        console.log('is opened clicked');

    }, [])

    return (
        <div className="relative">
            <div className="flex flex-row items-center gap-3">
                <div onClick={toggleOpen} className="md:py-1 md:px-2 bg-neutral-800 border border-neutral-700 flex flex-row items-center gap-3 rounded-xl cursor-pointer hover:shadow-md transition">
                    <AiOutlineMenu size={24} />
                    <div className="hidden md:block">
                        <Image className="rounded-full" height={24} width={24} alt="profile" src="/images/placeholder.jpg" />
                    </div>
                </div>
            </div >
            {openMenu && (
                <div className="absolute rounded-xl shadow-md w-40 bg-neutral-800 overflow-hidden right-0 top-12 text-sm border border-neutral-700">
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem onClick={() => setOpenModal(prev => !prev)} label="Login" />
                            <MenuItem onClick={() => { }} label="Sign up" />
                        </>
                    </div>
                </div>
            )}

            {openModal && <Modal openModal={openModal} />}
        </div>
    );
}

export default UserMenu;