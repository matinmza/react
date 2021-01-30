import React from "react";
import { Link, NavLink } from "react-router-dom";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
const Header = (prop) => {
  const user = useSelector((state) => state.userInformation);

  return (
    <header className="mt-5">
      <div id="fixed-top" className="bg-white fixed-top borderDown">
        <div className="container-fluid container-lg px-0 ">
          <nav className="navbar navbar-expand-lg navbar-light mx-3 mx-lg-0">
            <Link to="/" className="navbar-brand">
              <img src="../image/logo.png" className="logo " alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarCollapse"
              className="collapse navbar-collapse  justify-content-end"
            >
              <ul className="navbar-nav mx-3">
                <li className="nav-item">
                  <NavLink exact to="/" className="nav-link">
                    خانه
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/courses" className="nav-link">
                    محصولات آموزشی
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    درباره ما
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="contact" className="nav-link">
                    ارتباط با ما
                  </NavLink>
                </li>
                <li className="nav-item">
                  {user.fullname ? (
                    <NavLink to="/logout" className="nav-link">
                      خروج
                    </NavLink>
                  ) : (
                    <NavLink to="/login" className="nav-link">
                      ورود
                    </NavLink>
                  )}
                </li>
                <li className="nav-item">
                  {user.fullname ? (
                    <NavLink to="/dashboard" className=" nav-link d-lg-none">
                      پنل کاربری
                    </NavLink>
                  ) : (
                    <NavLink to="/register" className="nav-link d-lg-none">
                      ثبت نام
                    </NavLink>
                  )}
                </li>
              </ul>

              {user.fullname ? (
                <Link
                  to="/cart"
                  className="btn-1 cart-1  mx-2"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="سبد خرید"
                >
                  <i
                    className="fa fa-shopping-cart icon-header"
                    aria-hidden="true"
                  ></i>
                </Link>
              ) : null}

              {user.fullname ? (
                <Link to="/dashboard" className=" btn-2 d-none d-lg-block">
                  پنل کاربری
                </Link>
              ) : (
                <Link to="/register" className=" btn-1 d-none d-lg-block">
                  ثبت نام
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
