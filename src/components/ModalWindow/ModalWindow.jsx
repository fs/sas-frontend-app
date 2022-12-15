import { Background, Container, ButtonWrapper } from "./styles";
import ButtonClose from "../buttons/ButtonClose";

const ModalWindow = ({ showModal, customOnClick, children }) => {
  if (showModal) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "auto";
  }

  return (
    <Background showModal={showModal} onClick={customOnClick}>
      <Container onClick={(e) => e.stopPropagation()}>
        <ButtonWrapper>
          <ButtonClose action={customOnClick} />
        </ButtonWrapper>
        {children}
      </Container>
    </Background>
  );
};

export default ModalWindow;
