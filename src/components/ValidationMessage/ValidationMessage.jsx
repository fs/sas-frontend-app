import { useState } from "react";
import { MessageDiv, Icon } from "./styles";

const ValidationMessage = ({ text, src }) => {
  const [visible] = useState(false);

  return visible ? (
    <MessageDiv>
      <Icon src={src} />
      <p>{text}</p>
    </MessageDiv>
  ) : null;
};

export default ValidationMessage;
