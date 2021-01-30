export const courseReducer = (state = {}, action) => {
  switch (action.type) {
    case "get_course":
      return { ...action.payload };
    default:
      return state;
  }
};
