import axios from "axios";

export const getAPI = axios.create({
  baseURL: "http://54.180.2.226:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAccessToken = axios.create({
  baseURL: "http://54.180.2.226:5000",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

// export const getRefreshToken = axios.create({
//   baseURL: "http://54.180.2.226:5000",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem()}`,
//   },
// });
