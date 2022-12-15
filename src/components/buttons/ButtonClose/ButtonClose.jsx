import ButtonStyle from "./styles";
import closeButtonIcon from "../../../icons/closeButtonIcon.svg";

const ButtonClose = ({ onClick }) => {
  return (
    <ButtonStyle onClick={onClick}>
      <img src={closeButtonIcon} alt="closeButton" />
    </ButtonStyle>
  );
};

export default ButtonClose;
