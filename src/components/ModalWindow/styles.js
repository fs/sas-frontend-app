import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 415px;
  height: 715px;
  background-color: #fdebe7;
`;

export const ModalBackground = styled.div`
  position: fixed;
  display: ${(props) => (props.showModal ? "flex" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ModalImage = styled.img``;
