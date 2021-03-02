import React, { useState } from "react";
import * as S from "../../assets/style/Main/ChatStyle";
import * as P from "../../assets/style/Main/MainStyle";
import test2 from "../../assets/img/test2.jpg";
import { chatImg, chatRecord, chatSend } from "../../assets/img";
import io from "socket.io-client";
import Chat from "./Chat";
import ChatList from "./ChatList";

const socket = io("http://54.180.2.226:3000");

const ChatView = () => {
  let [chat, setChat] = useState("");
  const imgUrl = "https://jobits.s3.ap-northeast-2.amazonaws.com/";
  const config = {};
  const Message = (e) => {
    setChat(e.target.value);
  };

  const inputEnter = () => {
    if (window.event.keyCode === 13) {
      getChat();
    }
  };

  const getChat = () => {
    //채팅 보내는 소켓
    console.log(chat);
    socket.disconnect();

    const test = socket.on("test");
    console.log(test);
    // socket.emit("sendMessage", {'roomID' : , "token":});
    // const test2 = socket.on("realTimeChatting");
  };
  return (
    <>
      <S.ChatContainer>
        <S.Header>
          <P.ProfileBox main>
            <P.Profile main src={test2} />
          </P.ProfileBox>
          <S.Name>백예린</S.Name>
        </S.Header>
        <S.MessageContainer>{/* <Chat /> */}</S.MessageContainer>
        <S.InputContainer>
          <S.img src={chatImg} />
          <S.img src={chatRecord} record />
          <S.ChatInput onChange={Message} onKeyPress={inputEnter} />
          <S.img src={chatSend} onClick={getChat} />
        </S.InputContainer>
      </S.ChatContainer>
    </>
  );
};

export default ChatView;
