export const allCoursesReducer = (state = [], action) => {
  switch (action.type) {
    case "get_allCourses":
      return [...action.payload];

    default:
      return state;
  }
};
