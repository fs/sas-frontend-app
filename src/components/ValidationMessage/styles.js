import styled from "styled-components";

const Icon = styled.img`
  width: auto;
  height: 75%;
  margin: 5px;
`;

const MessageDiv = styled.div`
  background-color: #f1cacd;
  border-radius: 10px;
  display: flex;
  height: 40px;
  justify-content: start;
  align-items: center;

  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000;
`;

export { MessageDiv, Icon };
