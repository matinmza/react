import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Header from "../commen/Header";
import Footer from "./../commen/Footer";

const About = () => {
  return (
    <Fragment>
      <Helmet>
        <title>درباره ما | متین </title>
      </Helmet>
      <Header />
      <div className="header"></div>
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="row ">
            <div className="col-12 col-md-6">
              <img className="img-fluid" src="image/about.png" alt="x" />
            </div>
            <div className="col-12 mt-md-5 col-md-6">
              <h1 className="text-center"> درباره ما</h1>
              <p>
                این آموزشگاه تستی است که برای فروش محصولات آموزش برنامه نویسی به
                کار میرود که توسط متین ظریف نوشته شده است کلاینت سایت با ری اکت
                نوشته شده است متن تستی که باید جهت پر کردن این قسمت بنویسم تا
                فضای قالب به درستی نمایش داده شود.
              </p>
              <div className="mt-5">
                <Link className=" btn-1 mx-1 mx-lg-3 mb-2" to="/courses">
                  محصولات آموزشی
                </Link>
                <Link className=" btn-2" to="/contact">
                  {" "}
                  تماس با ما
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default About;
