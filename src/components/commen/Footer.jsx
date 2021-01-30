import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="container-fluid bg-light-2">
        <div className="container pt-5 ">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-5 mb-lg-0 d-flex justify-content-center align-items-center flex-column">
              <span className="logo">
                <img src="../image/logo.png" alt="logo" />
              </span>
              <span>
                <h2 className="h5 mt-3">آموزشکده متین</h2>
              </span>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-2 mb-lg-0">
              <ul className="list-unstyled">
                <h5 className="mb-4">دسترسی آسان</h5>
                <hr />
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    ارتباط با ما
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    تماس با ما
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    درباره ما
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    همکاری با ما
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-2 mb-lg-0">
              <ul className="list-unstyled">
                <h5 className="mb-4">لینک های پربازدید </h5>
                <hr />
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    مطالب
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    وبلاگ
                  </a>
                </li>
                <li>
                  <a href="#" className="fw-bolder">
                    <i className="bi bi-caret-left-fill icon-2 vertical-icon2"></i>
                    خدمات
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-2 mb-lg-0">
              <ul className="list-unstyled">
                <h5 className="mb-4"> ارتباط با ما</h5>
                <hr />
                <li>
                  <p>
                    <i className="bi bi-geo-alt icon-2 vertiacl-icon2"></i>
                    آدرس : تهران خیابان الکی کوچه الکی پلاک اول
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi bi-telephone-fill icon-2 vertical-icon2"></i>
                    شماره تماس : 1234567 021
                  </p>
                </li>
                <li>
                  <p>
                    <i className="bi bi-envelope-open-fill icon-2 vertical-icon2"></i>
                    ایمیل : info@matin.com
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mb-0 bg-light-1 py-2">
        {" "}
        تماما کدنویسی این سایت توسط
        <span className=" fw-bold"> متین ظریف </span>
        انجام شده است.
      </p>
    </footer>
  );
};

export default Footer;
