import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import * as S from "../../assets/style/Main/ChatStyle";

// const socket = io("http://54.180.2.226:3003");

const Chat = () => {
  let [chat, setChat] = useState(
    "안녕하세요. 대덕소프트웨어 마이스터 고등학교 소프트웨어 개발과 3학년 1반 5번 김해린입니다."
  );
  let [length, setLength] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setLength({
      width: chat.length,
      height: chat.length,
    });
  }, []);
  return (
    <S.MessageLayOut>
      <S.MyMessageBox width={length.width} height={length.height}>
        <S.Message> {chat}</S.Message>
      </S.MyMessageBox>
      <S.MessageBox width={length.width} height={length.height}>
        <S.Message>{chat}</S.Message>
      </S.MessageBox>
    </S.MessageLayOut>
  );
};

export default Chat;
