import React, { useEffect, useState } from "react";
import * as S from "../../assets/style/Profile/ProfileStyle";
import { getMyProfile } from "../../lib/Profile";

const MyProfile = () => {
  let [data, setData] = useState({
    name: "",
    id: "",
    introduce: "오늘의 날씨는 비",
    img: "",
  });
  let [length, setLength] = useState(0);

  const imgSrc = "https://jobits.s3.ap-northeast-2.amazonaws.com/";

  useEffect(() => {
    getMyProfile().then((res) => {
      console.log(res.data.profileData.statusMessage.length);
      setData({
        ...data,
        name: res.data.profileData.name,
        id: res.data.profileData.id,
        introduce: res.data.profileData.statusMessage,
        img: res.data.profileData.img,
      });
    });
    setLength(data.introduce.length);
  }, []);
  return (
    <S.MainContainer>
      <S.ProfileBox>
        <S.ImgBox>
          <S.Profile src={imgSrc + data.img} />
        </S.ImgBox>
        <S.Name>{data.name}</S.Name>
        <S.ID>ID : {data.id}</S.ID>
        <S.Introduce value={data.introduce} length={length + length * 13} />
        <S.EditBut>프로필 변경</S.EditBut>
      </S.ProfileBox>
    </S.MainContainer>
  );
};

export default MyProfile;
