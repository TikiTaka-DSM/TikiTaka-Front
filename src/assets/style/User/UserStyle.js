import styled, { css } from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 50%;
  height: 100%;
  background: #ffddd5;
`;
export const IconBox = styled.div`
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;
export const LeftIcon = styled.img`
  display: block;
  height: 40%;
  width: 90%;
`;
export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: center;
  width: 50%;
`;

export const LoginBox = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 60%;
  height: 60%;
`;

export const Logo = styled.img`
  margin: 0 10.5rem 0.5rem 10.5rem;
  width: 22%;
  height: 20%;
`;

export const InputBox = styled.div`
  height: 30%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
`;

export const InputId = styled.input.attrs({
  type: "id",
  placeholder: "ID",
})`
  width: 40%;
  ::placeholder {
    color: black;
    font-weight: 500;
    font-size: 15px;
  }
  font-size: 15px;
  border: none;
  border-bottom: 3px solid #fda491;
  outline: none;
`;

export const InputPw = styled(InputId).attrs({
  type: "password",
  placeholder: "PW",
})``;

export const LoginText = styled.h4`
  color: #ffddd5;
`;

export const LoginBtn = styled.button`
  outline: none;
  border: 1px solid black;
  background-color: white;
  border-radius: 50px;
  width: 25%;
  height: 8%;
  cursor: pointer;
  margin: 2rem 10rem 0 10rem;
  :hover {
    background-color: #fec9b9;
    color: white;
    border: #fec9b9;
  }
  ${(props) => props.isInput && btnChange}
`;

const btnChange = css`
  background-color: #fec9b9;
  color: white;
  border: #fec9b9;
`;
