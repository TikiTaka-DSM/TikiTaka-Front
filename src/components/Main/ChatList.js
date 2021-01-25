import React, { useEffect, useState } from "react";
import * as S from "../../assets/style/Main/MainStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/img/imgTest.jpeg";
import Search from "./Search";
import { getMyProfile } from "../../lib/Profile";
const ChatList = () => {
  let [profile, setProfile] = useState("");
  const imgUrl = "https://jobits.s3.ap-northeast-2.amazonaws.com/";

  useEffect(() => {
    getMyProfile().then(() => {
      setProfile(res.data.profileData.img);
    });
  }, []);
  return (
    <>
      <S.ListContainer>
        <S.TopContainer>
          <S.ProfileBox>
            <S.Profile src={imgUrl + profile} />
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
