import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  clearEmail,
  clearPassword,
  clearUserName,
  email,
  password,
  userName,
} from "../../Actions/register/register";
import Header from "../commen/Header";
import axios from "axios";
import { toast } from "react-toastify";
import { withRouter } from "react-router";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { Helmet } from "react-helmet";
const Register = (props) => {
  const dispatch = useDispatch();
  const fullnameState = useSelector((state) => state.fullnameRegister);
  const emailRegisterState = useSelector((state) => state.emailRegister);
  const passwordRegisterState = useSelector((state) => state.passwordRegister);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resetState = () => {
      dispatch(clearUserName());
      dispatch(clearEmail());
      dispatch(clearPassword());
    };
    try {
      dispatch(showLoading());
      const user = {
        fullname: fullnameState,
        email: emailRegisterState,
        password: passwordRegisterState,
      };
      const { status } = await axios.post(
        "https://toplearnapi.ghorbany.dev/api/register",
        JSON.stringify(user),
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (status === 201) {
        toast.success("ثبت نام با موفقیت انجام شد", {
          position: "bottom-right",
        });
        props.history.push("/login");
        dispatch(hideLoading());
        resetState();
      }
    } catch (ex) {
      dispatch(hideLoading());
      toast.error("ثبت نام انجام نشد!", {
        position: "bottom-right",
      });
    }
  };
  return (
    <Fragment>
      <Helmet>
        <title>ثبت نام |متین </title>
      </Helmet>
      <Header />
      <div className="header"></div>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "89vh", backgroundColor: "#f3f7f7" }}
      >
        <div className="bg-pink1 h-75 w-75 radius shadow-sm">
          <div className="row d-flex flex-column-reverse flex-sm-row justify-content-center h-100">
            <div className="d-none d-md-flex align-items-center justify-content-center col-sm-3 col-lg-6 mx-auto style1">
              <img src="./image/img2.png" className="img-fluid " alt="1" />
            </div>
            <div className="col-12 col-lg-5 px-4 d-flex flex-column justify-content-around py-3 flex-row">
              <form
                className="form w-75 mx-auto"
                onSubmit={(e) => handleSubmit(e)}
              >
                <h1 className="text-center">ثبت نام</h1>
                <label className="mt-3 px-1">نام کاربری</label>
                <input
                  name="name"
                  className="name form-control"
                  type="text"
                  defaultChecked
                  placeholder="حداقال 5 کاراکتر"
                  onChange={(e) => {
                    dispatch(userName(e.target.value));
                  }}
                />
                <label className="mt-3 px-1"> ایمیل</label>
                <input
                  name="email"
                  className="email form-control "
                  type="email"
                  defaultChecked
                  placeholder="test@mail.com"
                  onChange={(e) => {
                    dispatch(email(e.target.value));
                  }}
                />
                <label className="mt-3 px-1"> رمز ورود</label>
                <input
                  name="name"
                  placeholder="حداقال 5 کاراکتر"
                  className="password form-control "
                  type="password"
                  defaultChecked
                  onChange={(e) => {
                    dispatch(password(e.target.value));
                  }}
                />

                <button
                  className="btn w-100 bg-green1 mt-4"
                  defaultChecked
                  type="submit"
                >
                  ثبت نام
                </button>
              </form>

              <div className="align-s mt-3 d-flex flex-column flex-md-row justify-content-around">
                <Link to="/" className="btn btn-group btn-1 ">
                  صفحه اصلی
                </Link>
                <Link
                  to="/login"
                  className="btn btn-group btn-2 mt-2 mt-md-0   "
                >
                  ورود{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Register);
