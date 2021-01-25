import React from "react";
import * as U from "../../assets/style/User/UserStyle";
import ChatList from "./ChatList";
import Chat from "./ChatView";

const Main = () => {
  return (
    <U.MainContainer>
      <ChatList />
      <Chat />
    </U.MainContainer>
  );
};
export default Main;
