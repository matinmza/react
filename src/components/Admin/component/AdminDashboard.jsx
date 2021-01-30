import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
const AdminDashboard = () => {
  const date1 = new Date().toString();
  const time = date1.slice(16, 21);
  const today = date1.slice(0, 15);
  const user = useSelector((state) => state.userInformation);
  const allCourses = useSelector((state) => state.allCourses);
  const lenghtCourses = allCourses.length;
  return (
    <Fragment>
      <Helmet>
        <title>پنل ادمین || متین </title>
      </Helmet>
      <div className="row p-4">
        <div className="col-6 col-md-3 d-flex align-items-lg-stretch">
          <div className="card light-shadow w-100 bg-info">
            <div className="card-body d-flex align-items-center justify-content-around ">
              <i
                className="fa fa-clock-o icon-admin-dashboard"
                aria-hidden="true"
              ></i>
              <span style={{ fontSize: "2rem" }}> {time}</span>
            </div>
            <div className="card-footer w-100 text-center">{today}</div>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-lg-stretch">
          <div className="card light-shadow w-100 bg-primary">
            <div className="card-body d-flex align-items-center justify-content-around ">
              <i
                className="fa fa-shopping-basket icon-admin-dashboard"
                aria-hidden="true"
              ></i>
              <span style={{ fontSize: "2rem" }}> {lenghtCourses}</span>
            </div>
            <div className="card-footer w-100 text-center">
              تعداد دوره های سایت
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-lg-stretch">
          <div className="card light-shadow w-100 bg-danger">
            <div className="card-body d-flex align-items-center justify-content-around ">
              <i
                className="fa fa-weixin  icon-admin-dashboard"
                aria-hidden="true"
              ></i>
              <span style={{ fontSize: "2rem" }}> 0</span>
            </div>
            <div className="card-footer w-100 text-center">
              نظرات پاسخ داده نشده
            </div>
          </div>
        </div>
        <div className="col-6 col-md-3 d-flex align-items-lg-stretch">
          <div className="card light-shadow w-100 bg-warning">
            <div className="card-body d-flex align-items-center justify-content-around ">
              <i
                className="fa fa-clock-o icon-admin-dashboard"
                aria-hidden="true"
              ></i>
              <span style={{ fontSize: "2rem" }}>25721</span>
            </div>
            <div className="card-footer w-100 text-center">
              بازدید امروز سایت
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 h-75  d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h4>
            خوش اومدی
            <span className="text-success">{user.fullname}</span>
          </h4>
          <p>هیچ کار عقب افتاده ای نداریم بدون نگرانی ادامه بده</p>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminDashboard;
