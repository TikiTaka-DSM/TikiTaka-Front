import { getAccessToken, getFormData } from "./API";

export const getMyProfile = () => {
  return getAccessToken.get("/profile");
};

export const getProfile = (user_id) => {
  return getAccessToken.get(`/profile/${user_id}`);
};

export const editProfile = (img, name, statusMessage) => {
  return getFormData.put("/profile");
};
