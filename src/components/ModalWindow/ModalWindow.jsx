import ModalBackground from "./styles";

const ModalWindow = ({ showModal, customOnClick }) => {
  return <ModalBackground showModal={showModal} onClick={customOnClick} />;
};

export default ModalWindow;
