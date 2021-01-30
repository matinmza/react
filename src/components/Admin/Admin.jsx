import React, { Fragment } from "react";
import SideBar from "./SideBar";
import { Route, Switch } from "react-router-dom";
import AdminDashboard from "./component/AdminDashboard";
import EditCourse from "./component/EditCourse";
const Admin = () => {
  return (
    <Fragment>
      <div className="bg-dark-admin text-admin  vh-100 container-fluid">
        <div className="row h-nav-admin ">
          <SideBar />
          <div className="col-12 col-md-9 ">
            <Switch>
              <Route path="/admin/editcourse" component={EditCourse} />
              <Route path="/admin/deletecourse" component={EditCourse} />
              <Route path="/admin/newcourse" component={EditCourse} />
              <Route path="/admin/users" component={EditCourse} />
              <Route path="/admin/setting" component={EditCourse} />
              <Route path="/admin/newpage" component={EditCourse} />
              <Route path="/admin/newblog" component={EditCourse} />
              <Route path="/admin/manager" component={EditCourse} />
              <Route path="/admin/gallery" component={EditCourse} />
              <Route path="/admin/usernazar" component={EditCourse} />
              <Route path="/admin/store" component={EditCourse} />
              <Route path="/admin/amar" component={EditCourse} />
              <Route exact component={AdminDashboard} />
            </Switch>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Admin;
