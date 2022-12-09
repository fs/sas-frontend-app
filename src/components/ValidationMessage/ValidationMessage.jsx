import { MessageDiv, Icon } from "./styles";

const ValidationMessage = ({ text, icon }) => {
  return (
    <MessageDiv>
      <Icon src={icon} />
      <p>{text}</p>
    </MessageDiv>
  );
};

export default ValidationMessage;
