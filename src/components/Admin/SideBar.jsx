import React from "react";
import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <div className="col-12 col-md-3 px-0 bg-dark-admin-nav">
      <ul className="list-unstyled h-100 d-flex flex-column justify-content-center ">
        <NavLink className="text-admin dashboard-nav-link " to="/admin">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-tachometer text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>داشبورد</h6>
          </li>
        </NavLink>
        <NavLink
          className="text-admin dashboard-nav-link "
          to="/admin/editcourse"
        >
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-pencil-square-o text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>ادیت کردن دوره</h6>
          </li>
        </NavLink>
        <NavLink
          className="text-admin dashboard-nav-link "
          to="/admin/deletecourse"
        >
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-trash text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>پاک کردن دوره</h6>
          </li>
        </NavLink>
        <NavLink
          className="text-admin dashboard-nav-link "
          to="/admin/newcourse"
        >
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-plus text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>ساخت دوره جدید</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/users">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-user-o text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>کاربران</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/setting">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-cog text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>تنظیمات</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/newpage">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-paperclip text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>ساخت صفحه جدید</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/newblog">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-plus-square-o text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>نوشتن مطلب جدید</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/manager">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-university text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>مدیریت مدرسین</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/gallery">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-picture-o text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>مدیریت رسانه ها</h6>
          </li>
        </NavLink>
        <NavLink
          className="text-admin dashboard-nav-link "
          to="/admin/usernazar"
        >
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-weixin text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>دیدگاه ها</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/admin/store">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-shopping-bag text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>فروشگاه</h6>
          </li>
        </NavLink>

        <NavLink className="text-admin dashboard-nav-link " to="/admin/amar">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-money text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>آمار فروشگاه</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-desktop text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>مشاهده سایت</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/logout">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa fa-power-off text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>خروج</h6>
          </li>
        </NavLink>
        <NavLink className="text-admin dashboard-nav-link " to="/dashboard">
          <li className="nav-dashboard d-flex ">
            <i
              className="fa-user-md fa text-icon-admin px-3"
              aria-hidden="true"
            ></i>

            <h6>بازگشت به پنل کاربری</h6>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
