export const getAllCourses = (courses) => {
  return async (dispatch) => {
    await dispatch({ type: "get_allCourses", payload: courses });
  };
};
