import React, { useEffect, useState } from "react";
import * as S from "../../assets/style/Profile/ProfileStyle";
import { getProfile } from "../../lib/Profile";
import { UserBlock } from "../../lib/User";
import { useHistory } from "react-router-dom";

const Profile = () => {
  let [data, setData] = useState({
    id: "",
    name: "",
    message: "",
    img: "",
  });
  let [state, setState] = useState({
    block: false,
    friend: false,
  });

  const history = useHistory();
  const imgSrc = "https://jobits.s3.ap-northeast-2.amazonaws.com/";

  //user id 주소에서 가져오기
  useEffect(() => {
    console.log(history);
    getProfile("ex2").then((res) => {
      console.log(res.data);
      setData({
        ...state,
        id: res.data.profileData.id,
        name: res.data.profileData.name,
        img: res.data.profileData.img,
        message: res.data.profileData.statusMessage,
      });
      setState({
        ...state,
        block: res.data.state.block,
        friend: res.data.state.friend,
      });
    });
  }, []);

  const block = () => {
    UserBlock("ex2").then((res) => {
      console.log(state.block);
      // if (res.status == 200) {
      //   setState({ ...state, block: true });
      // }
      console.log(res);
      console;
    });
  };
  return (
    <S.MainContainer>
      <S.ProfileBox>
        <S.ImgBox>
          <S.Profile src={imgSrc + data.img} />
        </S.ImgBox>
        <S.Name>{data.name}</S.Name>
        <S.ID> ID : {data.id}</S.ID>
        <S.Introduce value={data.message} length={length + length * 13} />

        {state.friend ? (
          <S.ButtonBox>
            <S.ProfileBut>채팅하기</S.ProfileBut>
            <S.ProfileBut onClick={block}>차단하기</S.ProfileBut>
          </S.ButtonBox>
        ) : (
          <S.ButtonBox>
            <S.ProfileBut>친구 추가</S.ProfileBut>
          </S.ButtonBox>
        )}
      </S.ProfileBox>
    </S.MainContainer>
  );
};

export default Profile;
