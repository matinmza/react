import React from "react";
import { Link } from "react-router-dom";
const AdminNav = () => {
  return (
    <div className="admin-nav d-flex align-items-center">
      <div className=" text-admin d-flex justify-content-lg-between align-items-center container-fluid">
        <span>خوش آمدید admin</span>
        <span>
          <Link to="/" className="text-admin">
            پنل مدیریت
          </Link>{" "}
        </span>
      </div>
    </div>
  );
};

export default AdminNav;
