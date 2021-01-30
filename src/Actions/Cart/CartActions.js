export const addCart = (course) => {
  return async (dispatch, getstate) => {
    const { carts } = getstate();
    carts.push(course);
    await dispatch({ type: "add_Cart", payload: carts });
  };
};
export const removeCart = (id) => {
  return async (dispatch, getstate) => {
    const { carts } = getstate();
    const cartsNew = carts.filter((course) => course._id !== id);
    await dispatch({ type: "remove_cart", payload: cartsNew });
  };
};
