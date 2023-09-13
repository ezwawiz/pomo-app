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

    return (
        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 backdrop-blur bg-neutral-800/70 ">

            <div className="flex flex-col gap-4 h-3/5 w-3/5 md:h-2/5 md:w-2/5 dark:bg-neutral-800 bg-neutral-200 border dark:border-neutral-600 border-neutral-100 rounded-xl">

                {/* HEADER */}
                <div className="relative border-b dark:border-neutral-700/30 border-neutral-100/30">
                    <button onClick={handleShowModal} className="absolute top-0 left-0 p-2 text-3xl"> <IoClose /> </button>
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


