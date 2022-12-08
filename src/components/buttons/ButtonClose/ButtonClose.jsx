import ButtonStyle from "./styles";
import closeButtonIcon from "../../../icons/closeButtonIcon.svg";

const ButtonClose = ({ action }) => {
  return (
    <ButtonStyle onClick={action}>
      <img src={closeButtonIcon} alt="closeButton" />
    </ButtonStyle>
  );
};

export default ButtonClose;
