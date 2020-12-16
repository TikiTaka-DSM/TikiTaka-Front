import React from "react";
import * as S from "../../assets/style/User/UserStyle";
import { chat } from "../../assets/img";

const Login = () => {
  return (
    <>
      <S.LeftContainer>
        <S.IconBox>
          <S.LeftIcon src={chat}></S.LeftIcon>
        </S.IconBox>
      </S.LeftContainer>
      <S.LoginContainer></S.LoginContainer>
    </>
  );
};
export default Login;
