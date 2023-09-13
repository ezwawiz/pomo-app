import Modal from "./Modal";

interface SettingsModalProps {
    handleShowModal: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
    handleShowModal,
}) => {

    const bodyContent = (
        <div>settings body</div>
    )

    const footerContent = (
        <div>settings footer</div>
    )

    return (
        <Modal
            title="Settings"
            body={bodyContent}
            footer={footerContent}
            handleShowModal={handleShowModal}

        />
    );
}

export default SettingsModal;