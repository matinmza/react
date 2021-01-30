export const userEmailReducer = (state = "", action) => {
  switch (action.type) {
    case "set_email":
      return action.payload;
    case "clear_email":
      return action.payload;
    default:
      return state;
  }
};
export const userNameReducer = (state = "", action) => {
  switch (action.type) {
    case "set_userName":
      return action.payload;
    case "clear_userName":
      return action.payload;

    default:
      return state;
  }
};
export const userPasswordReducer = (state = "", action) => {
  switch (action.type) {
    case "set_password":
      return action.payload;
    case "clear_password":
      return action.payload;

    default:
      return state;
  }
};
