export const loginEmailReducer = (state = "", action) => {
  switch (action.type) {
    case "set_emailLogin":
      return action.payload;
    case "clear_emailLogin":
      return action.payload;

    default:
      return state;
  }
};
export const loginPasswordReducer = (state = "", action) => {
  switch (action.type) {
    case "set_passwordUserLogin":
      return action.payload;
    case "clear_passwordUserLogin":
      return action.payload;
    default:
      return state;
  }
};
export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "add_userInformation":
      return { ...action.payload };
    case "clear_userInformation":
      return { ...action.payload };

    default:
      return state;
  }
};
