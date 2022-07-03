import { SIGN_IN, SIGN_OUT } from "../types";

const initialState = {
  token: null,
  isLoggedIn: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        token: action.payload,
        isLoggedIn: true,
      };
    }
    case SIGN_OUT: {
      return {
        ...state,
        token: null,
        isLoggedIn: false,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
