import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../commen/Header";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
const Dashboard = () => {
  const user = useSelector((state) => state.userInformation);
  const allCourses = useSelector((state) => state.allCourses);

  const lenghtCourses = allCourses.length;
  return (
    <Fragment>
      <Helmet>
        <title>داشبورد | متین </title>
      </Helmet>
      <Header />
      <div className="header"></div>

      <div className="container pt-5">
        <div className="row pt-5 pt-sm-0 ">
          <div className="col-12 col-md-3 bg-dark-2 p-4 text-white radius-nav-dashboard shadow">
            <div className="text-center py-5">
              <i
                className="fa fa-user-circle nav-dashboard-icon"
                aria-hidden="true"
              ></i>
              <h6 className="mt-3"> سلام{user.fullname}</h6>
            </div>

            <ul className="list-unstyled mb-0 ">
              <li className="nav-dashboard">
                <i className="fa fa-home pe-3 " aria-hidden="true"></i>
                <NavLink
                  className="text-white dashboard-nav-link"
                  to="/dashboard"
                >
                  پیشخوان
                </NavLink>
              </li>
              <li className="nav-dashboard ">
                <i className="fa fa-credit-card pe-3 " aria-hidden="true"></i>
                <NavLink className="text-white dashboard-nav-link" to="/">
                  سفارشات
                </NavLink>
              </li>
              <li className="nav-dashboard">
                <i className=" fa fa-thumbs-o-up pe-3 " aria-hidden="true"></i>
                <NavLink className="text-white dashboard-nav-link" to="/">
                  علاقه مندی ها
                </NavLink>
              </li>
              <li className="nav-dashboard">
                <i className="fa fa-diamond pe-3 " aria-hidden="true"></i>

                <NavLink className="text-white dashboard-nav-link" to="/">
                  دوره های خریداری شده
                </NavLink>
              </li>
              <li className="nav-dashboard">
                <i className="fa fa-address-card pe-3 " aria-hidden="true"></i>

                <NavLink className="text-white dashboard-nav-link" to="/">
                  جزئیات حساب کاربری
                </NavLink>
              </li>
              <li className="nav-dashboard">
                <i className="fa fa-download pe-3 " aria-hidden="true"></i>
                <NavLink className="text-white dashboard-nav-link" to="/">
                  دانلودها
                </NavLink>
              </li>
              <li className="nav-dashboard">
                <i className=" fa fa-map pe-3 " aria-hidden="true"></i>
                <NavLink className="text-white dashboard-nav-link" to="/">
                  آدرس ها
                </NavLink>
              </li>
              <li className="nav-dashboard">
                <i className="fa fa-power-off pe-3 " aria-hidden="true"></i>
                <NavLink className="text-white dashboard-nav-link" to="/">
                  خروج
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-9 px-3  border radius-dashboard shadow">
            <div
              className="row mt-4 mx-2 border p-3"
              style={{ borderRadius: "3px" }}
            >
              <div className="col-6 col-md-3 ">
                <div className="d-flex flex-column flex-sm-row bg-light p-2 w-100">
                  <i
                    className="fa fa-university dashboard-icons"
                    aria-hidden="true"
                  ></i>
                  <div className="text-center">
                    <h6 style={{ fontSize: "0.9rem" }}>
                      {lenghtCourses}
                      دوره
                    </h6>
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                      در سایت وجود دارد
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 ">
                <div className="d-flex flex-column flex-sm-row bg-light p-2 w-100">
                  <i
                    className="fa fa-ticket dashboard-icons"
                    aria-hidden="true"
                  ></i>
                  <div className="text-center">
                    <h6 style={{ fontSize: "0.9rem" }}>2دوره</h6>
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                      ثبت نام کرده اید
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 ">
                <div className="d-flex flex-column flex-sm-row bg-light p-2 w-100">
                  <i
                    className="fa fa-newspaper-o dashboard-icons"
                    aria-hidden="true"
                  ></i>
                  <div className="text-center">
                    <h6 style={{ fontSize: "0.9rem" }}>1دوره</h6>
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                      در انتظار پرداخت
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 ">
                <div className="d-flex flex-column flex-sm-row bg-light p-2 w-100">
                  <i
                    className="fa fa-money dashboard-icons"
                    aria-hidden="true"
                  ></i>
                  <div className="text-center d-fw-bolder align-items-center justify-content-center">
                    <h6 style={{ fontSize: "0.9rem" }}>0 تومان</h6>
                    <p className="text-muted" style={{ fontSize: "0.8rem" }}>
                      موجودی حساب
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="row border mt-5 px-3 py-5 mx-2 bg-light-2 "
              style={{ borderRadius: "3px" }}
            >
              <div className="d-none d-md-block" style={{ marginTop: "-80px" }}>
                <i
                  className="fa fa-bell-o border p-3 bg-light-2"
                  style={{ fontSize: "2rem", borderRadius: "10px" }}
                  aria-hidden="true"
                ></i>
              </div>
              <h3>جدیدترین اعلانات</h3>
            </div>
            {user.email === "admin@test.com" || user.isAdmin === true ? (
              <div className="text-center ">
                <Link className="btn-2 my-5" to="/admin">
                  ورود به پنل مدیریت
                </Link>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
