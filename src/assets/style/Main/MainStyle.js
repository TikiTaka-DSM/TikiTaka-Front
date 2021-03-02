import styled from "styled-components";

export const ListContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  background: #fec9b9;
  flex-direction: column;
`;

export const TopContainer = styled.div`
  display: flex;
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
  width: ${(props) => {
    if (props.main) return "57px";
    else if (props.list) return "62px";
    else return "90px";
  }};
  height: ${(props) => {
    if (props.main) return "55px";
    else if (props.list) return "62px";
    else return "63px";
  }};
  margin: ${(props) => {
    if (props.main || props.list) return "0 15px 0 15px";
    else return "10px 0 0 10px";
  }};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Profile = styled.img`
  max-height: ${(props) => {
    if (props.main) return "80px";
    else return "110px";
  }};
`;

export const ListBox = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  flex-wrap: wrap;
  margin-top: 5px;
`;

export const ItemBox = styled.div`
  width: 100%;
  height: 75px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-top: 2px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.div`
  font-weight: bold;
  font-size: 12px;
`;

export const Message = styled.h1`
  font-size: 10px;
`;
