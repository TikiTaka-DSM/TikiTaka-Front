import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  text-align: center;
  width: 100%;
  margin-top: 15px;
`;
export const SearchBar = styled.div`
  width: 100%;
  height: 35px;
`;

export const SearchInput = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})`
  border: none;
  outline: none;
  ::placeholder {
    color: #ffa48e;
    font-size: 14px;
  }
  color: #ffa48e;
  border-radius: 50px;
  height: 100%;
  width: 90%;
  padding-left: 12px;
`;
