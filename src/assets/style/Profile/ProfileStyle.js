import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: #fec9b9;
`;

export const ProfileBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  height: 60%;
  border: none;
  border-radius: 50px;
  background-color: white;
  box-shadow: 8px 8px 10px rgb(51, 51, 51, 0.43);
`;

export const ImgBox = styled.div`
  border-radius: 50%;
  width: 17%;
  height: 30%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
export const ID = styled.p`
  color: rgb(0, 0, 0, 0.32);
  font-size: 15px;
  font-weight: bolder;
  margin-top: 0px;
`;

export const Introduce = styled.input.attrs({
  type: "text",
})`
  border: none;
  outline: none;
  border-bottom: 2px solid #fdc9ba;
  width: ${(props) => props.length}px;
  text-align: center;
  font-size: 18px;
`;

export const EditBut = styled.button``;
