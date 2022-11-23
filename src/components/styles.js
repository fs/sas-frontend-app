import styled from "styled-components";

export const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . ."
    ". . . .";
`;

export const ListItem = styled.div`
  width: 40%;
  padding: 1rem;
  background: #fefefe;
  border-radius: 0.5rem;
  box-shadow: 0 0 3px #999;
`;
