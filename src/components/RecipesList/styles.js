import styled from "styled-components";

const List = styled.div`
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

export default List;
