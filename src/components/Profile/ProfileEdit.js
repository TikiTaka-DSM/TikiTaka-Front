import React from "react";
import * as P from "../../assets/style/Profile/ProfileStyle";
import * as S from "../../assets/style/Profile/EditStyle";
import { editProfile } from "../../lib/Profile";
import { edit, testImg } from "../../assets/img";

const ProfileEdit = () => {
  const ProfileChange = () => {
    editProfile();
  };
  return (
    <P.MainContainer>
      <P.ProfileBox>
        <S.ImgForm>
          <S.ImgInput id="input-img" />
        </S.ImgForm>

        <S.ProfileChange>
          <S.ImgBox>
            <S.ProfileImg src={testImg} />
            <S.Change src={edit} />
          </S.ImgBox>
        </S.ProfileChange>
      </P.ProfileBox>
    </P.MainContainer>
  );
};
export default ProfileEdit;
