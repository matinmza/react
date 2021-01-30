import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import Footer from "../commen/Footer";
import Header from "../commen/Header";
const ContactUs = () => {
  return (
    <Fragment>
      <Helmet>
        <title>تماس با ما | متین</title>
      </Helmet>
      <Header />
      <div className="header mt-5 "></div>
      <img
        src="./image/content.jpg"
        className="img-fluid mt-5 mt-md-0 mx-auto"
        width="100%"
        alt="12"
      />
      <div className="container-fluid h-50">
        <div className="row d-flex flex-column-reverse flex-md-row ">
          <div className="col-12 col-md-6 bg-orang pt-4 pt-md-0">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
              <h1 className="pb-4">تماس با ما</h1>
              <ul className="list-unstyled">
                <li className="list-group-item d-flex flex-column align-items-center mb-3">
                  <i className="bi bi-telephone-fill mx-2 mb-2 text-success"></i>
                  شماره تماس : 000000-021
                </li>
                <li className="list-group-item d-flex flex-column align-items-center mb-3">
                  <i className="bi bi-envelope-open-fill mx-2 mb-2 text-success"></i>
                  ایمیل شرکت : matin@dev.com
                </li>
                <li className="list-group-item d-flex flex-column align-items-center mb-3">
                  <i className="bi bi-archive-fill mx-2 mb-2 text-success"></i>
                  فکس شرکتی : 4444-021
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 bg-pink2">
            <img src="./image/z.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default ContactUs;
