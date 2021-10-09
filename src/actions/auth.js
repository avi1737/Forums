export const setLoginFlag = (payload) => {
  return {
    type: "SET_LOGIN_FLAG",
    payload: payload,
  };
};

export const setUserData = (payload) => {
  return {
    type: "SET_USER_DATA",
    payload: payload,
  };
};

export const setUserAuthtoken = (payload) => {
  return {
    type: "SET_USER_AUTHTOKEN",
    payload: payload,
  };
};

export const clearAuth = () => {
  return {
    type: "CLEAR_AUTH"
  };
};
