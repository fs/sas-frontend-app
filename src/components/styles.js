import styled from "styled-components";

export const List = styled.div`
  display: grid;
  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(10, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(7, 1fr);
  }
  @media (min-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
  }
  gap: 20px 20px;
  padding: 78px;
`;

export const ListItem = styled.div`
  padding: 1rem;
  background: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 0 0 3px #999;
  background-color: #e7f9fd;
`;

export const ItemTitle = styled.h4`
  overflow: hidden;
  height: 40px;
  margin: 8px 0px;
`;

export const ItemImage = styled.img`
  height: 140px;
  width: 100%;
  object-fit: cover;
  border-radius: 5%;
`;

export const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const InfoIcon = styled.img`
  height: 24px;
  width: 24px;
`;

export const InfoText = styled.p`
  margin: 8px 0px;
`;
