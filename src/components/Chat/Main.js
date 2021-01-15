import React from "react";
import * as S from "../../assets/style/Main/MainStyle";
import * as U from "../../assets/style/User/UserStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import profile from "../../assets/img/imgTest.jpeg";

const Main = () => {
  return (
    <U.MainContainer>
      <S.LeftContainer>
        <S.ProfileBox>
          <S.Profile src={profile} />
        </S.ProfileBox>
        <S.IconBox>
          <FontAwesomeIcon icon={faCog} size="2x" color="white" />
        </S.IconBox>
      </S.LeftContainer>
    </U.MainContainer>
  );
};
export default Main;
