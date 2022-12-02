import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  display: ${(props) => (props.showModal ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export default ModalBackground;
