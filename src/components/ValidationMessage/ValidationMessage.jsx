import { MessageDiv, Icon } from "./styles";

const ValidationMessage = ({ text, icon }) => {
  return (
    <MessageDiv data-testid="test-validation-message">
      <Icon src={icon} />
      <p>{text}</p>
    </MessageDiv>
  );
};

export default ValidationMessage;
