import styled from "styled-components";

export const ImgBox = styled.div`
  width: 60%;
  height: 60%;
`;

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

export const ProfileImg = styled.img``;
