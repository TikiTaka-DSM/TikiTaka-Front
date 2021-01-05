import React, { useState } from "react";
import * as S from "../../assets/style/User/UserStyle";
import { logo, chat } from "../../assets/img";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  let [data, setData] = useState({
    id: "",
    pw: "",
    user: "",
  });
  let [isInput, setIsInput] = useState(false);
  const history = useHistory();
  const { id, pw, user } = data;

  const inputData = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    if (name == "user") setIsInput(true);
    if (name == "user" && value == "") setIsInput(false);
  };

  const getSignUp = () => {
    if (isInput) {
    }
  };

  return (
    <S.MainContainer>
      <S.LeftContainer>
        <S.IconBox>
          <S.LeftIcon src={chat} />
        </S.IconBox>
      </S.LeftContainer>
      <S.LoginContainer>
        <S.LoginBox>
          <S.Logo src={logo} />
          <S.LoginText>지금 바로 티키타카에 가입해 보세요!</S.LoginText>
          <S.InputBox>
            <S.InputId name="id" onChange={inputData} />
            <S.InputPw name="pw" onChange={inputData} />
            <S.Name name="user" onChange={inputData} />
          </S.InputBox>
          <S.UserButton isInput={isInput} onClick={getSignUp}>
            회원가입
          </S.UserButton>
        </S.LoginBox>
      </S.LoginContainer>
    </S.MainContainer>
  );
};

export default SignUp;
