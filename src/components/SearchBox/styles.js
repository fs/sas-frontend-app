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
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background-color: rgba(0, 0, 0, 0);
  border-color: rgba(0, 0, 0, 0);

  width: 393px;
  height: 100%;

  background: #d0edeb;
  border-radius: 10px;

  margin: 0px 10px 0px;

  :focus {
    border-color: rgba(0, 0, 0, 0);
    outline: none;
    color: rgba(0, 0, 0, 0.8);
  }

  line-height: 28px;
  text-align: center;

  color: rgba(0, 0, 0, 0.6);
`;

const SearchInput = styled.input`
  width: 103px;
  height: 100%;
  left: 0px;
  top: 0px;

  margin: 0px 10px 0px;

  background: #0bbdb1;
  border-radius: 10px;
  border-color: rgba(0, 0, 0, 0);

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;

  text-align: center;

  color: #000000;

  cursor: pointer;
`;

export { SearchDiv, SearchTextInput, SearchInput };
