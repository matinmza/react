import React from "react";
import { Fragment } from "react";
import Header from "../commen/Header";
import Footer from "./../commen/Footer";
import Pagination from "./../../Utils/Pagination";
import Courses from "./courses";
import { Helmet } from "react-helmet";
const Shopping = () => {
  return (
    <Fragment>
      <Helmet>
        <title>فروشگاه | متین </title>
      </Helmet>
      <Header />
      <div className="header"></div>
      <div className="bg-light-3">
        <div className="container pt-5">
          <h1 className="h4 mt-4" style={{ color: "#444", fontWeight: "bold" }}>
            دوره های آموزشی
          </h1>
          <hr />
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card radius-2  bg-light mb-3">
                <div className="p-3 radius-2 bg-white">
                  <h5 className="card-title">نوع دوره</h5>
                  <hr className="mb-0" />
                </div>
                <div className="card-body pt-0">
                  <form>
                    <div className="form-check d-flex justify-content-between p-0">
                      <label className="form-check-label" htmlFor="gridCheck1">
                        رایگان
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                        id="gridCheck1"
                      />
                    </div>
                    <div className="form-check d-flex justify-content-between p-0">
                      <label className="form-check-label" htmlFor="gridCheck1">
                        نقدی
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                        id="gridCheck1"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="card radius-2  bg-light mb-3">
                <div className="p-3 radius-2 bg-white">
                  <h5 className="card-title">مرتب سازی</h5>
                  <hr className="mb-0" />
                </div>
                <div className="card-body pt-0">
                  <form>
                    <fieldset className="row mb-3">
                      <div className="col-sm-10">
                        <div className="form-check d-flex justify-content-between p-0">
                          <label
                            className="form-check-label"
                            htmlFor="gridRadios1"
                          >
                            گران ترین
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked
                            name="gridRadios"
                            id="gridRadios1"
                            value="option1"
                            checked
                          />
                        </div>
                        <div className="form-check d-flex justify-content-between p-0">
                          <label
                            className="form-check-label"
                            htmlFor="gridRadios2"
                          >
                            ارزان ترین
                          </label>
                          <input
                            className="form-check-input"
                            type="radio"
                            defaultChecked
                            name="gridRadios"
                            id="gridRadios2"
                            value="option2"
                          />
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9 ">
              {/* courses */}
              <div className="row">
                <Courses />
              </div>
              {/* end courses in up */}
              <div className="mt-4">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Shopping;
