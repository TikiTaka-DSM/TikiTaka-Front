import { getAccessToken } from "./API";

export const ChatList = () => {
  return getAccessToken.get("/room");
};

export const RoomCreate = (friend_id) => {
  return getAccessToken.post("/room", { people: [friend_id] });
};

export const ChatData = (id) => {
  return getAccessToken.get(`/room/${id}`);
};
