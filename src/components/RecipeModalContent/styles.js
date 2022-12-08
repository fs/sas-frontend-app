import styled from "styled-components";

export const ReceiptContent = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ReceiptInfo = styled.div``;

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
