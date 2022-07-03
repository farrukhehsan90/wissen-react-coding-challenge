import axios from "axios";
import { SET_USERS } from "../types";
import { serverUrl } from "../../ServerURL";

export const getUserData = (data) => async (dispatch) => {
  return axios({
    url: process.env.REACT_APP_USERS_API,
    method: "GET",
    baseURL: serverUrl,
    headers: {
      Authorization: `Bearer ${data}`,
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      dispatch({
        type: SET_USERS,
        payload: res.data.data,
      });
      return res;
    })
    .catch((err) => {
      console.log("error:", err);
      throw err.response;
    });
};
