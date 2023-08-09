import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className="modal"
      overlayClassName="overlay"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
