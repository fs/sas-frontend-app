import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 620px;
  background-color: #fdebe7;
  border-radius: 5%;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 90vh;

  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }

  h1 {
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: fit-content;
  padding: 0px 30px;
`;

export const ModalImage = styled.img`
  height: 285px;
  width: 100%;
  object-fit: cover;
  border-radius: 5%;
`;

export const CloseButton = styled.a`
  height: 30px;
  width: 30px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 30px;
`;

export const Ingredients = styled.div`
  h4 {
    margin: 10px 0px;
  }
  max-width: 60%;
`;

export const AdditionalInfo = styled.div`
  max-width: 40%;
`;
