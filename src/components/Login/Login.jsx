import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../commen/Header";
import jwt from "jsonwebtoken";
import {
  emailLogin,
  passwordLogin,
  clearemailLogin,
  clearpasswordLogin,
  addUser,
} from "./../../Actions/Login/login";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from "react-router";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { Helmet } from "react-helmet";
const Login = ({ history }) => {
  const dispatch = useDispatch();
  const emailState = useSelector((state) => state.emailLogin);
  const passwordState = useSelector((state) => state.passwordLogin);
  const handleLoginForm = async (e) => {
    e.preventDefault();
    const user = {
      email: emailState,
      password: passwordState,
    };
    const clear = () => {
      dispatch(clearemailLogin());
      dispatch(clearpasswordLogin());
    };
    dispatch(showLoading());
    try {
      const {
        status,
        data,
      } = await axios.post(
        "https://toplearnapi.ghorbany.dev/api/login",
        JSON.stringify(user),
        { headers: { "content-type": "application/json" } }
      );
      if (status === 200) {
        toast.success("ورود موفقیت آمیز بود", { position: "bottom-right" });
        localStorage.setItem("token", data.token);
        const decodetoken = jwt.decode(data.token, { complete: true });
        dispatch(addUser(decodetoken.payload.user));
        history.push("/");
        dispatch(hideLoading());
        clear();
      }
    } catch (ex) {
      toast.error("ورود انجام نشد", {
        position: "bottom-right",
      });
      dispatch(hideLoading());
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>ورود | متین </title>
      </Helmet>
      <Header />
      <div className="header"></div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "89vh", backgroundColor: "#f3f7f7" }}
      >
        <div className="bg-blue1 h-75 w-75 radius shadow-sm">
          <div className="row d-flex flex-column-reverse flex-lg-row justify-content-center h-100">
            <div className="col-12 col-lg-5 px-4 d-flex flex-column justify-content-around py-3 flex-row">
              <form className="form" onSubmit={(e) => handleLoginForm(e)}>
                <h1 className="text-center">ورود</h1>
                <label className="mt-3">ایمیل</label>
                <input
                  name="name"
                  className="name form-control"
                  type="text"
                  defaultChecked
                  onChange={(e) => dispatch(emailLogin(e.target.value))}
                />
                <label className="mt-3"> رمز ورود</label>
                <input
                  name="name"
                  className="password form-control "
                  type="password"
                  defaultChecked
                  onChange={(e) => dispatch(passwordLogin(e.target.value))}
                />
                <button
                  className="btn w-100 btn-primary mt-4"
                  defaultChecked
                  type="submit"
                >
                  ورود
                </button>
              </form>
              <div className="align-s mt-3 d-flex flex-column flex-md-row justify-content-around">
                <Link to="/" className="btn btn-group btn-1 ">
                  صفحه اصلی
                </Link>
                <Link
                  to="/register"
                  className="btn btn-group btn-2 mt-2 mt-md-0   "
                >
                  ثبت نام
                </Link>
              </div>
            </div>
            <div className="d-none d-md-flex align-items-center justify-content-center col-sm-3 col-lg-6 mx-auto style1">
              <img src="./image/img2.png" className="img-fluid " alt="1" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Login);
