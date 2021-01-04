import React, { useState } from "react";
import * as S from "../../assets/style/User/UserStyle";
import { chat, logo } from "../../assets/img";

const Login = () => {
  let [data, setData] = useState({
    id: "",
    pw: "",
  });
  let [isInput, setIsInput] = useState(false);

  const { id, pw } = data;

  const inputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (name == "pw") setIsInput(true);
    if (name == "pw" && value == "") setIsInput(false);
  };

  const login = () => {
    if (isInput) {
      console.log(data);
    } else console.log("no");
  };

  const loginEnter = (e) => {
    if (window.event.keyCode == 13) login();
  };
  return (
    <S.MainContainer>
      <S.LeftContainer>
        <S.IconBox>
          <S.LeftIcon src={chat}></S.LeftIcon>
        </S.IconBox>
      </S.LeftContainer>
      <S.LoginContainer>
        <S.LoginBox>
          <S.Logo src={logo} />
          <S.LoginText>
            티키타카를 통해 다양한 사람들과 대화를 해 보세요!
          </S.LoginText>
          <S.InputBox>
            <S.InputId name="id" onChange={inputChange} />
            <S.InputPw
              name="pw"
              onChange={inputChange}
              onKeyPress={loginEnter}
            />
          </S.InputBox>
          <S.LoginBtn isInput={isInput} onClick={login}>
            Login
          </S.LoginBtn>
        </S.LoginBox>
      </S.LoginContainer>
    </S.MainContainer>
  );
};
export default Login;
