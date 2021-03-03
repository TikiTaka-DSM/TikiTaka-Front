import styled from "styled-components";

export const ImgForm = styled.form.attrs({
  action: "http://54.180.2.226:5000/profile",
  method: "put",
  enctype: "multipart/form-data",
})``;

export const ImgInput = styled.input.attrs({
  type: "file",
  multiple: "multiple",
  name: "file",
  accept: "image/jpg, image/png, image/jpeg, image/gif",
})`
  display: none;
`;

export const ProfileChange = styled.label.attrs({
  for: "input-img",
})`
  cursor: pointer;
`;

export const ImgBox = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  line-height: 130px;
`;
export const Change = styled.img`
  position: relative;
  width: 50%;
  z-index: 2;
  left: 18%;

  vertical-align: middle;
`;
export const ProfileImg = styled.img`
  width: 85%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(50%);
  border-radius: 50%;
  object-fit: cover;
`;
