import styled from "styled-components";

export const LeftContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background: #fec9b9;
`;

export const IconBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  margin: 0.625rem 0.625rem 0 0;
  cursor: pointer;
`;

export const ProfileBox = styled.div`
  background-color: white;
  border: none;
  border-radius: 50%;
  width: 90px;
  height: 63px;
  margin: 5px 0 0 10px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.img`
  max-height: 110px;
`;

export const SearchBar = styled.div``;

export const Search = styled.input.attrs({
  type: "text",
  placeholder: "Search",
})``;
export const RightContainer = styled.div``;
