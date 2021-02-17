import React, { useState } from "react";
import io from "socket.io-client";
import * as S from "../../assets/style/Main/ChatStyle";

const socket = io("http://54.180.2.226:3000");

const Chat = () => {
  let [chat, setChat] = useState("");

  socket.on("test");
  return <S.Message></S.Message>;
};

export default Chat;
