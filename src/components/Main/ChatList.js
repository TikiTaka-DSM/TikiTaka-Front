import React, { useEffect } from "react";
import * as S from "../../assets/style/Main/MainStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/img/imgTest.jpeg";
import Search from "./Search";
const ChatList = () => {
  useEffect(() => {}, []);
  return (
    <>
      <S.ListContainer>
        <S.TopContainer>
          <S.ProfileBox>
            <S.Profile src={profile} />
          </S.ProfileBox>
          <S.IconBox>
            <FontAwesomeIcon icon={faCog} size="2x" color="white" />
          </S.IconBox>
        </S.TopContainer>
        <Search />
      </S.ListContainer>
    </>
  );
};

export default ChatList;
