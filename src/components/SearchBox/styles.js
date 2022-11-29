import styled from "styled-components";

const SearchDiv = styled.div`
  width: 100%;
  height: 39px;
  display: flex;
`;

const SearchTextInput = styled.input`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  border: none;
  width: ${(props) => props.width}px;
  height: 100%;
  background: #d0edeb;
  border-radius: 10px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
  color: rgba(0, 0, 0, 0.6);

  :focus {
    outline: none;
    color: rgba(0, 0, 0, 0.8);
  }
`;

const SearchInput = styled.input`
  font-family: "Inter";
  width: 103px;
  height: 100%;
  background-color: #0bbdb1;
  border-radius: 10px;
  border: none;

  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #000000;
  cursor: pointer;
`;

export { SearchDiv, SearchTextInput, SearchInput };