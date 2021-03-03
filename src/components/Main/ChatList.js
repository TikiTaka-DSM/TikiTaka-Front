import React, { useEffect, useState } from "react";
import * as S from "../../assets/style/Main/MainStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import listImg from "../../assets/img/imgTest.jpeg";
import Search from "./Search";
import { getMyProfile } from "../../lib/Profile";
import { useHistory } from "react-router-dom";

const ChatList = () => {
  const history = useHistory();
  let [profile, setProfile] = useState("");
  const imgUrl = "https://jobits.s3.ap-northeast-2.amazonaws.com/";

  useEffect(() => {
    getMyProfile().then((res) => {
      setProfile(res.data.profileData.img);
    });
  }, []);

  const profileClick = () => {
    history.push("/myProfile");
  };

  const editClick = () => {
    history.push("/edit");
  };

  return (
    <S.ListContainer>
      <S.TopContainer>
        <S.ProfileBox onClick={profileClick}>
          <S.Profile src={imgUrl + profile} />
        </S.ProfileBox>
        <S.IconBox onClick={editClick}>
          <FontAwesomeIcon icon={faCog} size="2x" color="white" />
        </S.IconBox>
      </S.TopContainer>
      <Search />
      {/* <S.ListBox>
        <S.ItemBox>
          <S.ProfileBox list>
            <S.Profile src={listImg} />
          </S.ProfileBox>
          <S.TextBox>
            <S.Name>최연준</S.Name>
            <S.Message>밥 먹었어?</S.Message>
          </S.TextBox>
        </S.ItemBox>
        <S.ItemBox>
          <S.ProfileBox list>
            <S.Profile src={listImg} />
          </S.ProfileBox>
        </S.ItemBox>
      </S.ListBox> */}
    </S.ListContainer>
  );
};

export default ChatList;
