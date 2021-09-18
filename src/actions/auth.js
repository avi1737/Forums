export const setLoginFlag = async (payload) => {
  return {
    type: "SET_LOGIN_FLAG",
    payload: payload,
  };
};

export const setUserData = async (payload) => {
  return {
    type: "SET_USER_DATA",
    payload: payload,
  };
};

export const setUserAuthtoken = async (payload) => {
  return {
    type: "SET_USER_AUTHTOKEN",
    payload: payload,
  };
};
