import styled from "styled-components";

const SearchDiv = styled.div`
  width: 100%;
  height: 39px;
  left: 0px;
  top: 0px;

  display: flex;
`;

const SearchTextInput = styled.input`
  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);

  width: ${(props) => props.width}px;
  height: 100%;

  background: #d0edeb;
  border-radius: 10px;

  margin-left: 10px;
  margin-right: 10px;

  :focus {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
    color: rgba(0, 0, 0, 0.8);
  }

  text-align: center;

  color: rgba(0, 0, 0, 0.6);
`;

const SearchInput = styled.input`
  width: 103px;
  height: 100%;

  background: #0bbdb1;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0);

  font-family: "Inter";
  font-weight: 400;
  font-size: 16px;

  text-align: center;

  color: #000000;

  cursor: pointer;
`;

export { SearchDiv, SearchTextInput, SearchInput };
