import { Background, Container, ButtonWrapper } from "./styles";
import ButtonClose from "../buttons/ButtonClose";

const ModalWindow = ({ showModal, customOnClick, children }) => {
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
