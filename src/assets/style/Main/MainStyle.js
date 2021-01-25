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
    else return "90px";
  }};
  height: ${(props) => {
    if (props.main) return "55px";
    else return "63px";
  }};
  margin: ${(props) => {
    if (props.main) return "0 15px 0 15px";
    else return "10px 0 0 10px";
  }};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Profile = styled.img`
  max-height: ${(props) => {
    if (props.main) return "80px";
    else return "110px";
  }};
`;

export const RightContainer = styled.div``;
