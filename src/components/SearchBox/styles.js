import styled from "styled-components";

const VerticalDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SearchDiv = styled.div`
  width: 100%;
`;

const SearchTextInput = styled.input`
  width: ${(props) => props.width}px;
  height: 100%;
  border: none;
  background: #d0edeb;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;

  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);

  @media (max-width: 1100px) {
    width: 60%;
    margin-bottom: 3px;
  }

  :focus {
    outline: none;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const SearchInput = styled.input`
  width: 100px;
  height: 100%;
  background-color: #0bbdb1;
  border-radius: 10px;
  border: none;

  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  cursor: pointer;

  @media (max-width: 1100px) {
    width: 60%;
  }
`;

const SearchForm = styled.form`
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;

  margin: 0 auto;

  width: 70%;
  height: 39px;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: start;
    height: 130px;
    align-items: center;
  }
`;

const ValidationBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px;
`;

export { VerticalDiv, SearchDiv, SearchTextInput, SearchInput, ValidationBox, SearchForm };
