import React, { Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Matin from "./Containers/Matin";
import { ToastContainer } from "react-toastify";
import jwt from "jsonwebtoken";
import { useDispatch } from "react-redux";
import { addUser, clearUser } from "./Actions/Login/login";
import LoadingBar from "react-redux-loading-bar";
import axios from "axios";
import { getAllCourses } from "./Actions/Courses/CoursesActions";

function App() {
  const dispatch = useDispatch();
  const getCourses = async () => {
    const {
      data: { courses },
    } = await axios.get("https://toplearnapi.ghorbany.dev/api/courses");

    dispatch(getAllCourses(courses));
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decodeToken = jwt.decode(localStorage.getItem("token"));
      const LoginTime = decodeToken.exp;
      const dateNow = Math.floor(Date.now() / 1000);
      if (LoginTime > dateNow) {
        dispatch(addUser(decodeToken.user));
      } else {
        localStorage.removeItem("token");
        dispatch(clearUser());
      }
    }
    getCourses();
  }, []);
  return (
    <Fragment>
      <LoadingBar
        style={{
          backgroundColor: "#ff6b81",
          height: "5px",
          zIndex: "9999",
        }}
      />
      <div className="App">
        <BrowserRouter>
          <Matin />
          <ToastContainer />
        </BrowserRouter>
      </div>
    </Fragment>
  );
}

export default App;
