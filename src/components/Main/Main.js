import React from "react";
import * as U from "../../assets/style/User/UserStyle";
import ChatList from "./ChatList";
import ChatView from "./ChatView";

const Main = () => {
  return (
    <U.MainContainer>
      <ChatList />
      <ChatView />
    </U.MainContainer>
  );
};
export default Main;
