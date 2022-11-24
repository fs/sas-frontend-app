import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 20px 20px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . .";
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
