import React, { Fragment } from "react";
import Home from "./../components/home/Home";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./../components/about/About";
import ContentUs from "../components/about/contactUs";
import Login from "../components/Login/Login";
import Register from "./../components/Register/Register";
import Shopping from "./../components/Courses/Shoping";
import Logout from "./../components/Login/Logout";
import Dashboard from "./../components/Dashboard/Dashboard";
import Admin from "./../components/Admin/Admin";
import { useSelector } from "react-redux";
import Course from "./../components/Courses/course";
import Cart from "./../components/CartShop/Cart";
const Matin = () => {
  const user = useSelector((state) => state.userInformation);
  return (
    <Fragment>
      <Switch>
        <Route path="/contact" component={ContentUs} />
        <Route
          path="/dashboard"
          render={() => {
            if (user.fullname) {
              return <Dashboard />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          path="/admin"
          render={() => {
            if (user.fullname === "admin7") {
              return <Admin />;
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/register" component={Register} />
        <Route path="/courses" component={Shopping} />
        <Route path="/cart" component={Cart} />
        <Route path="/course/:id" component={Course} />
        <Route path="/about" component={About} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Fragment>
  );
};

export default Matin;
