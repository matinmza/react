export const emailLogin = (email) => {
  return async (dispatch) => {
    await dispatch({ type: "set_emailLogin", payload: email });
  };
};
export const passwordLogin = (password) => {
  return async (dispatch) => {
    await dispatch({ type: "set_passwordUserLogin", payload: password });
  };
};
export const addUser = (user) => {
  return async (dispatch) => {
    await dispatch({ type: "add_userInformation", payload: user });
  };
};
export const clearemailLogin = () => {
  return async (dispatch) => {
    await dispatch({ type: "clear_emailLogin", payload: "" });
  };
};
export const clearpasswordLogin = () => {
  return async (dispatch) => {
    await dispatch({ type: "clear_passwordUserLogin", payload: "" });
  };
};
export const clearUser = () => {
  return async (dispatch) => {
    await dispatch({ type: "clear_userInformation", payload: {} });
  };
};
