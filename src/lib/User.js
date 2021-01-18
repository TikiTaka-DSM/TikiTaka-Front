import { getAPI } from "./API";

export const UserJoin = (id, password, name) => {
  return getAPI.post("/user", { id, password, name });
};

export const UserLogin = (id, password) => {
  return getAPI.post("/user/auth", { id, password });
};
