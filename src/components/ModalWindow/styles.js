import styled from "styled-components";

export const Background = styled.div`
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

export const Container = styled.div`
  width: 620px;
  background-color: #fdebe7;
  border-radius: 5%;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;

  h1 {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;
