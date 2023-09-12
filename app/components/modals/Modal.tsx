'use client'

import { IoClose } from "react-icons/io5";
import { useState } from 'react'

interface ModalProps {
    modalOpen?: boolean;
    handleShowModal?: () => void;
    title: string;
    body?: React.ReactElement;
    footer?: React.ReactElement;

}

const Modal: React.FC<ModalProps> = ({
    modalOpen,
    handleShowModal,
    title,
    body,
    footer,

}) => {

    console.log(modalOpen + 'we are clicked')

    return (
        <div className=" flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur bg-neutral-800/70 ">

            <div className="flex flex-col gap-4 h-3/5 w-3/5 sm:h-96 sm:w-96 bg-neutral-800 border border-neutral-600 rounded-xl">

                {/* HEADER */}
                <div className="relative border-b border-neutral-700/30">
                    <button onClick={handleShowModal} className="absolute top-0 left-0 p-2"> <IoClose /> </button>
                    <div className="text-center text-lg font-semibold p-2">{title}</div>
                </div>

                {/* BODY */}
                <div className="my-auto">
                    <p className="text-base mx-6">{body}</p>
                </div>

                {/* FOOTER */}

                {footer}


            </div>

        </div>


    );
}

export default Modal;


