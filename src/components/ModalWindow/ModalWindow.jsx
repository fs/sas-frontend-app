import ModalBackground from "./styles";

const ModalWindow = ({ showModal, customOnClick, children }) => {
  return (
    <ModalBackground showModal={showModal} onClick={customOnClick}>
      {children}
    </ModalBackground>
  );
};

export default ModalWindow;
