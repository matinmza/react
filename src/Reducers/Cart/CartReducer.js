export const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "add_cart":
      return [...action.payload];
    case "remove_cart":
      return [...action.payload];
    default:
      return state;
  }
};
