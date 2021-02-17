import React from "react";
import * as P from "../../assets/style/Profile/ProfileStyle";
import * as S from "../../assets/style/Profile/EditStyle";

const ProfileEdit = () => {
  const ProfileChange = () => {
    editProfile;
  };
  return (
    <P.MainContainer>
      <P.ProfileBox>
        <S.ImgForm>
          <S.ImgInput id="input-img" />
        </S.ImgForm>
        <S.ImgBox></S.ImgBox>
      </P.ProfileBox>
    </P.MainContainer>
  );
};
export default ProfileEdit;
