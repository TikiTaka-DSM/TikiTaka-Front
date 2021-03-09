import { getAPI, getAccessToken } from "./API";

export const UserJoin = (id, password, name) => {
  return getAPI.post("/user", { id, password, name });
};

export const UserLogin = (id, password) => {
  return getAPI.post("/user/auth", { id, password });
};

export const UserAdd = (id) => {
  return getAccessToken.post(`/friend/${id}`);
};

export const UserBlock = (user_id) => {
  return getAccessToken.put(`/friend/block/${user_id}`);
};

export const UserSearch = (user_id) => {
  return getAPI.get(`/friend?id=${user_id}`);
};

export const FriendSearch = (user_name) => {
  return getAccessToken.get(`/friend?name=${user_name}`);
};

export const FriendList = () => {
  return getAccessToken.get("/friends");
};
