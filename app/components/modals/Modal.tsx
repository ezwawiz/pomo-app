'use client'

import { IoClose } from "react-icons/io5";
import { useState } from 'react'

interface ModalProps {
    openModal: boolean;
}

const Modal: React.FC<ModalProps> = ({
    openModal,

}) => {

    const [showModal, setShowModal] = useState(openModal);
    const [closeModal, setCloseModal] = useState(false);


    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur bg-neutral-800/70 ">

            <div className="h-3/5 w-3/5 sm:h-96 sm:w-96 bg-neutral-700 border border-neutral-600 rounded-xl">

                {/* HEADER */}
                <div className="flex items-center">
                    <button className="p-3"> <IoClose /> </button>
                </div>

                <input className="mx-auto" type="text" />



            </div>

        </div>


    );
}

export default Modal;


