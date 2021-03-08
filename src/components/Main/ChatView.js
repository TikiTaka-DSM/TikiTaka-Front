import React, { useState, useEffect } from "react";
import * as S from "../../assets/style/Main/ChatStyle";
import * as P from "../../assets/style/Main/MainStyle";
import test2 from "../../assets/img/test2.jpg";
import { chatImg, chatRecord, chatSend } from "../../assets/img";
import io from "socket.io-client";
import Chat from "./Chat";
import ChatList from "./ChatList";
import { RoomCreate, ChatData } from "../../lib/Chat";

const socket = io("http://54.180.2.226:3003");

const ChatView = () => {
  let [chat, setChat] = useState("");
  let [room, setRoom] = useState(23);
  let [data, setData] = useState({
    img: "",
    name: "",
  });
  const imgUrl = "https://jobits.s3.ap-northeast-2.amazonaws.com/";
  const config = {};

  const Message = (e) => {
    setChat(e.target.value);
  };

  useEffect(() => {
    socket.emit("joinRoom", 23);
    ChatData(23).then((res) => {
      console.log(res.data);
      setData({
        img: res.data.roomData.img,
        name: res.data.roomData.name,
      });
    });
  }, []);

  const inputEnter = () => {
    if (window.event.keyCode === 13) {
      getChat();
    }
  };

  const getChat = () => {
    console.log(data);

    const messageData = {
      roomId: room,
      token: localStorage.getItem("accessToken"),
      message: chat,
    };

    socket.emit("sendMessage", messageData);
    socket.on("realTimeChatting", (chatMessage) => {
      console.log(chatMessage);
    });
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
        <S.MessageContainer>
          {/* <ul id="chat"></ul> */}
          <Chat />
        </S.MessageContainer>
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
