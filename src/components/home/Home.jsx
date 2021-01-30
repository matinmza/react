import React, { Fragment } from "react";
import Header from "./../commen/Header";
import Footer from "./../commen/Footer";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>صفحه نخست | متین </title>
      </Helmet>
      <Header />
      <div className="header"></div>

      <section className="pt-5 ">
        <div className="container mb-5  mt-5 mt-lg-0">
          <div id="firstRow" className="row align-items-center mb-5">
            <div className="col-12 col-lg-5 mb-5 mb-0">
              <h1 className="mb-4">دنیای برنامه نویسی و وب</h1>
              <p id="title">
                معرفی بهترین زبان های برنامه نویسی و دورهمی برنامه نویسان در
                سراسر ایران
              </p>
              <Link to="/courses" className="btn btn-2">
                دوره های آموزشی
              </Link>
            </div>
            <div className="col-12 col-lg-7">
              <img src="image/img1.png" className="img-fluid" alt="" />
            </div>
          </div>

          <div className="row groups-card ">
            <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card-1 d-flex flex-column p-4">
                <i
                  className="bi-chat-quote-fill icon-1"
                  style={{
                    backgroundColor: "#d4b3b080",
                    color: "rgba(119, 73, 12, 0.808)",
                  }}
                ></i>
                <h3 className="my-4">پشتیبانی</h3>
                <p> یک متن تستی جهت دیدن کارایی چیزی که نوشته شده است ممنون</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card-1 d-flex flex-column p-4">
                <i
                  className="bi-brush-fill icon-1"
                  style={{
                    backgroundColor: "#f1c40f9c",
                    color: "rgba(126, 112, 95, 0.671)",
                  }}
                ></i>
                <h3 className="my-4">طراحی</h3>
                <p> یک متن تستی جهت دیدن کارایی چیزی که نوشته شده است ممنون</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card-1 d-flex flex-column p-4">
                <i
                  className=" bi-check2-square icon-1"
                  style={{
                    backgroundColor: "#e4766a80",
                    color: "rgb(119, 73, 12)",
                  }}
                ></i>
                <h3 className="my-4">رضایت</h3>
                <p> یک متن تستی جهت دیدن کارایی چیزی که نوشته شده است ممنون</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3 mb-lg-0">
              <div className="card-1 d-flex flex-column p-4">
                <i
                  className="bi-cloud icon-1"
                  style={{
                    backgroundColor: "#6b248a80",
                    color: "rgb(236, 226, 226)",
                  }}
                ></i>
                <h3 className="my-4">خدمات</h3>
                <p> یک متن تستی جهت دیدن کارایی چیزی که نوشته شده است ممنون</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row">
            <div className="col-12 col-lg-6  ">
              <img src="image/img2.png" className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-lg-6">
              <h2>قدرت های برنامه نویسی</h2>
              <p className="py-4">
                این یک متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر. لورم
                یک متن تستی برای گرافیک کاران و طراحان می باشد
              </p>
              <div className="row">
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">طراحی وب سایت</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">طراحی اپلیکیشن موبایل</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline"> طراحی نرم افزار کامپیوتر</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">هوش مصنوعی</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">ساخت بازی های کامپیوتری</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">ساخت بازی های موبایل</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">استفاده از پایگاه های داده</p>
                  </div>
                </div>
                <div className="col-6 mb-4">
                  <div className="card-1  align-items-center p-3">
                    <i className="bi bi-check-all icon-2 d-inline"></i>
                    <p className="d-inline">طراحی وب اپلیکیشن</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 mt-5 bg-light">
          <div className="container">
            <h2 className="text-center">آموزشکده زبان های برنامه نویسی</h2>
            <p className="text-center my-5">
              {" "}
              ما در این سایت تمامی زبان های برنامه نویسی را به صورت جداگانه و
              مجزا وتیمی حرفه ای برای هر زبان تدریس میکنیم ،هریک از تیم های ما
              دارای تجربه آموزش به تعداد کثیری از دانشجویان هستند لزا بی درنگ
              میتوانید شروع کنید{" "}
            </p>
            <div className="row py-4">
              <div className="col-12 col-md-6 mb-4">
                <div className="card-2  align-items-center py-3 px-2 justify-content-start d-flex ">
                  <i
                    className="bi bi-puzzle-fill  icon-3"
                    style={{
                      color: "rgb(147, 150, 135)",
                      backgroundColor: "rgba(238, 255, 0, 0.637)",
                    }}
                  ></i>
                  <span className="mx-5">
                    <h3 className="my-3">زبان جاوا اسکریپت</h3>
                    <p>
                      {" "}
                      زبانی بسیار مدرن در راستای وب که توانایی انجام امور سمت
                      سرور و سمت کاربر را همزمان دارد{" "}
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card-2  align-items-center py-3 px-2 justify-content-start d-flex ">
                  <i
                    className="bi bi-code  icon-3"
                    style={{
                      color: "rgb(235, 235, 235)",
                      backgroundColor: "rgba(88, 180, 58, 0.61)",
                    }}
                  ></i>
                  <span className="mx-5">
                    <h3 className="my-3">زبان پایتون</h3>
                    <p>
                      {" "}
                      زبانی بسیار منعطف و نسل جدیدی که توانایی های زیادی دارد هم
                      در وب هم در اپلیکیشن های موبایل و هم هوش مصنوعی به نوعی
                      پایتون همه فن حریف است{" "}
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card-2  align-items-center py-3 px-2 justify-content-start d-flex ">
                  <i
                    className="bi bi-code-slash icon-3"
                    style={{
                      color: "rgb(7, 14, 15)",
                      backgroundColor: "rgba(119, 120, 209, 0.616)",
                    }}
                  ></i>
                  <span className="mx-5">
                    <h3 className="my-3">زبان پی اچ پی</h3>
                    <p>
                      زبانی برای طراحی وبسایت های پوریا با سرعت بالا و محبوبیت
                      بینظیر و شی گرا
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card-2  align-items-center py-3 px-2 justify-content-start d-flex ">
                  <i
                    className="bi bi-cup-fill icon-3"
                    style={{
                      color: "rgba(96, 5, 201, 0.651)",
                      backgroundColor: "rgba(241, 0, 0, 0.514)",
                    }}
                  ></i>
                  <span className="mx-5">
                    <h3 className="my-3">زبان سی شارپ</h3>
                    <p>
                      {" "}
                      زبانی بسیار معروف برای ویندوز که با کمک آن میتوانید برنامه
                      های ویندوزی بسیار حرفه ای طراحی کنید و اکثر شرکت های بزرگ
                      از این زبان استفاده میکنند.{" "}
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card-2  align-items-center py-3 px-2 justify-content-start d-flex ">
                  <i
                    className="bi bi-controller  icon-3"
                    style={{
                      color: "rgb(221, 221, 221)",
                      backgroundColor: "rgba(12, 171, 211, 0.596)",
                    }}
                  ></i>
                  <span className="mx-5">
                    <h3 className="my-3">زبان سی پلاس پلاس</h3>
                    <p>
                      {" "}
                      زبانی بسیار مناسب برای بازی سازی که توسط کمپانی های بزرگی
                      استفاده می شود و به نوعی زبانی مخصوص بازی باز هاست{" "}
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card-2  align-items-center py-3 px-2 justify-content-start d-flex ">
                  <i
                    className="bi bi-lightning-fill  icon-3"
                    style={{
                      color: "rgb(229, 243, 149)",
                      backgroundColor: "rgba(155, 15, 85, 0.534)",
                    }}
                  ></i>
                  <span className="mx-5">
                    <h3 className="my-3">زبان جاوا </h3>
                    <p>
                      زبانی مخصوص گوشی های موبایل که بیشتر اپلیکیشن های موبایلی
                      توسط جاوا ساخته میشود که با توجه به سرعت بالا و قابلیت های
                      مناسبی که دارد واقعا در برنامه نویسی موبایل حرف های زیادی
                      برای گفتن دارد
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container py-3 text-center ">
          <h2>آمار آموزشکده ما </h2>
          <p>
            این آمار بعد از 4 سال سابقه کار بی وقفه در آموزشکده ما بدست آمده
            است.
          </p>
          <div className="row">
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="card-3 p-4">
                <h3 className="h2 fw-bolder mt-4">10320 +</h3>
                <p>دانشجو</p>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="card-3 p-4">
                <h3 className="h2 fw-bolder mt-4">4 +</h3>
                <p>سال فعالیت</p>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="card-3 p-4">
                <h3 className="h2 fw-bolder mt-4">99%</h3>
                <p>رضایت مندی دانشجویان</p>
              </div>
            </div>
            <div className="col-12 col-md-3 d-flex justify-content-center align-items-center mb-3 mb-md-0">
              <div className="card-3 p-4">
                <h3 className="h2 fw-bolder mt-4">32 +</h3>
                <p>مدرس حرفه ای</p>
              </div>
            </div>
            <div className="my-5 col-12 col-md-9 mx-auto">
              <div className="card-4 p-4  m-auto text-start ">
                <div className="row">
                  <div className="col-12 col-md-8">
                    <h3>آیا هنوز درمورد آموزشکده ما پرسشی دارید؟</h3>
                    <p className="mb-4">
                      شما میتوانید با بخش پشتیبانی مجموعه ما با بهترین کارشناسان
                      در ارتباط باشید. تا بتوانیم بهترین خدمات را به شما تقدیم
                      کنیم
                    </p>
                  </div>
                  <div className="col-12 col-md-4 mx-auto d-flex justify-content-center align-items-center">
                    <Link to="/contact" className="btn btn-1">
                      تماس با ما
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container py-5">
          <h2 className="text-center mb-3">آخرین مطالب سایت</h2>
          <p className="text-center mb-5">
            اخرین اخبار و آموزش های برنامه نویسی وبسایت متین
          </p>
          <div className="row">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="image/img3.png"
                  alt="x"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    بهترین زبان های برنامه نویسی سال 1399
                  </h5>
                  <p className="card-text">
                    این یک متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر.
                    لورم یک متن تستی برای گرافیک کاران و طراحان می باشد این یک
                    متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر. لورم یک
                    متن تستی برای گرافیک کاران و طراحان می باشد
                  </p>
                  <a href="#" className="fw-bolder">
                    ادامه مطلب
                    <i className="bi bi-arrow-left  vertical-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="image/img1.png"
                  alt="x"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    بهترین زبان های برنامه نویسی سال 1399
                  </h5>
                  <p className="card-text">
                    این یک متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر.
                    لورم یک متن تستی برای گرافیک کاران و طراحان می باشد این یک
                    متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر. لورم یک
                    متن تستی برای گرافیک کاران و طراحان می باشد
                  </p>
                  <a href="#" className="fw-bolder">
                    ادامه مطلب
                    <i className="bi bi-arrow-left  vertical-icon"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <div className="card">
                <img
                  className="card-img-top img-fluid"
                  src="image/img2.png"
                  alt="x"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    بهترین زبان های برنامه نویسی سال 1399
                  </h5>
                  <p className="card-text">
                    این یک متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر.
                    لورم یک متن تستی برای گرافیک کاران و طراحان می باشد این یک
                    متن تستی جهت نمایش طراحی متین ظریف امین است با تشکر. لورم یک
                    متن تستی برای گرافیک کاران و طراحان می باشد
                  </p>
                  <a href="#" className="fw-bolder">
                    ادامه مطلب
                    <i className="bi bi-arrow-left  vertical-icon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
};

export default Home;
