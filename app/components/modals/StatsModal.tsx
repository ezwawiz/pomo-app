import Modal from "./Modal";
import { BsPersonWorkspace } from "react-icons/bs"
import { IoTime, IoBed } from "react-icons/io5"

interface StatsModalProps {
    handleShowModal: () => void;
}

const StatsModal: React.FC<StatsModalProps> = ({
    handleShowModal,
}) => {

    const bodyContent = (
        <div className="flex flex-col">
            <div className="flex justify-center gap-6">

                <div className="flex flex-col gap-1 text-center">
                    <div className="p-6 border border-neutral-400 rounded-lg text-2xl font-bold">30</div>
                    <p className="text-sm">Work</p>
                </div>

                <div className="flex flex-col gap-1 text-center">
                    <div className="p-6 border border-neutral-400 rounded-lg text-2xl font-bold">54:23</div>
                    <p className="text-sm">Work Time</p>
                </div>

                <div className="flex flex-col gap-1 text-center">
                    <div className="p-6 border border-neutral-400 rounded-lg text-2xl font-bold">12</div>
                    <p className="text-sm">Breaks</p>
                </div>

            </div>




        </div>
    )



    return (
        <Modal
            title="Stats"
            body={bodyContent}
            handleShowModal={handleShowModal}

        />
    );
}

export default StatsModal;