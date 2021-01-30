import axios from "axios";
export const getCourse = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `https://toplearnapi.ghorbany.dev/api/course/${id}`
    );

    await dispatch({ type: "get_course", payload: data.course });
  };
};
