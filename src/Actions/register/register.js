export const userName = (userName) => {
  return async (dispatch) => {
    await dispatch({ type: "set_userName", payload: userName });
  };
};
export const email = (email) => {
  return async (dispatch) => {
    await dispatch({ type: "set_email", payload: email });
  };
};
export const password = (password) => {
  return async (dispatch) => {
    await dispatch({ type: "set_password", payload: password });
  };
};

// reset
export const clearUserName = () => {
  return async (dispatch) => {
    await dispatch({ type: "clear_userName", payload: "" });
  };
};
export const clearEmail = () => {
  return async (dispatch) => {
    await dispatch({ type: "clear_email", payload: "" });
  };
};
export const clearPassword = () => {
  return async (dispatch) => {
    await dispatch({ type: "clear_password", payload: "" });
  };
};
