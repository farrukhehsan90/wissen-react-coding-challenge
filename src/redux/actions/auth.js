import axios from "axios";
import { SIGN_IN } from "../types";
import { serverUrl } from "../../ServerURL";

export const login = (data) => async (dispatch) => {
  return axios({
    url: process.env.REACT_APP_LOGIN_API,
    method: "POST",
    baseURL: serverUrl,
    data,
  })
    .then((res) => {
      dispatch({
        type: SIGN_IN,
        payload: res.data.token,
      });
      return res;
    })
    .catch((err) => {
      console.log("error:", err);
    });
};
