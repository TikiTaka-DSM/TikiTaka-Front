import React, { useState } from "react";
import * as S from "../../assets/style/User/UserStyle";
import { logo, chat } from "../../assets/img";
import { useHistory } from "react-router-dom";
import { Error, Success, Warning } from "../../lib/Toast";
import { ToastContainer } from "react-toastify";
import { UserJoin } from "../../lib/User";
import { getAPI } from "../../lib/API";

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
      UserJoin(id, pw, user)
        .then((res) => {
          Success("회원가입이 완료되었습니다. 로그인을 해 주세요.");
          history.push("/login");
        })
        .catch((err) => {
          switch (err.response.status) {
            case 409:
              Error("존재하는 아이디입니다.");
          }
        });
    } else {
      Warning("빈 칸이 존재합니다. 모두 입력해 주세요.");
    }
  };

  const signUpEnter = () => {
    if (window.event.keyCode == 13) getSignUp();
  };

  return (
    <>
      <S.MainContainer>
        <ToastContainer />
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
              <S.Name
                name="user"
                onChange={inputData}
                onKeyPress={signUpEnter}
              />
            </S.InputBox>
            <S.UserButton isInput={isInput} onClick={getSignUp}>
              회원가입
            </S.UserButton>
          </S.LoginBox>
        </S.LoginContainer>
        <S.ModalContainer></S.ModalContainer>
      </S.MainContainer>
    </>
  );
};

export default SignUp;
