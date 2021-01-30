import React, { Fragment, useEffect } from "react";
import Footer from "../commen/Footer";
import Header from "../commen/Header";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../../Actions/Courses/CourseAction";
import { Helmet } from "react-helmet";
import { Img } from "react-image";
import { addCart } from "./../../Actions/Cart/CartActions";
import { toast } from "react-toastify";

const Course = (prop) => {
  const dispatch = useDispatch();
  const course = useSelector((state) => state.course);
  const user = useSelector((state) => state.userInformation);
  const cart = useSelector((state) => state.carts);
  useEffect(() => {
    dispatch(getCourse(prop.match.params.id));
  }, []);

  const hanleSendToCart = (e) => {
    e.preventDefault();
    let valid = true;
    cart.map((course1) =>
      course1._id === course._id ? (valid = false) : null
    );

    if (user.fullname) {
      if (valid === true) {
        toast.success("دوره به سبد خرید اضافه شد", {
          position: "bottom-right",
        });
        dispatch(addCart(course));
      } else {
        toast.error("دوره تکراری است", {
          position: "bottom-right",
        });
      }
    } else {
      toast.warning("لطفا ابتدا وارد شوید", {
        position: "bottom-right",
      });
      prop.history.push("/login");
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>{course.title}</title>
      </Helmet>
      <Header />
      <div className="header"></div>
      <div className="container-fluid pt-5 my-5">
        <div className="row">
          <div className="col-12 col-md-4 ">
            <div className="border p-3 dark-shadow ">
              <div className="d-flex text-green ">
                <i className="fa fa-money me-3   " aria-hidden="true"></i>
                <span>
                  <h6>
                    قیمت این دوره :{" "}
                    <span className="text-green">
                      {course.price === 0 ? (
                        <span>رایگان</span>
                      ) : (
                        <span>
                          ${course.price}
                          تومان
                        </span>
                      )}
                    </span>
                  </h6>
                </span>
              </div>
              <hr />
              <ul
                className="list-unstyled
              "
              >
                <li className="py-2">
                  <span className="text-secondary">
                    <i className="fa fa-user me-2 " aria-hidden="true"></i>
                    مدرس دوره :<span className="text-dark px-2">متین ظریف</span>
                  </span>
                </li>
                <li className="py-2">
                  <span className="text-secondary">
                    <i className="fa fa-users me-2 " aria-hidden="true"></i>
                    تعداد دانشجویان این دوره :{" "}
                    <span className="text-dark px-2">284</span>
                  </span>
                </li>
                <li className="py-2">
                  <span className="text-secondary">
                    <i
                      className="fa fa-video-camera me-2 "
                      aria-hidden="true"
                    ></i>
                    تعداد ویدیوها :
                    <span className="text-dark px-2">20 ویدیو</span>
                  </span>
                </li>
                <li className="py-2">
                  <span className="text-secondary">
                    <i className="fa fa-clock-o me-2 " aria-hidden="true"></i>
                    مدت زمان دوره :
                    <span className="text-dark px-2">26:41:00</span>
                  </span>
                </li>
                <li className="py-2">
                  <span className="text-secondary">
                    <i
                      className="fa fa-area-chart me-2 "
                      aria-hidden="true"
                    ></i>
                    سطح دوره :<span className="text-dark px-2">پیشرفته</span>
                  </span>
                </li>
                <li className="py-2">
                  <span className="text-secondary">
                    <i
                      className="fa fa-battery-three-quarters me-2 "
                      aria-hidden="true"
                    ></i>
                    وضعیت دوره:<span className="text-dark px-2">کامل شده </span>
                  </span>
                </li>
                <li className="py-2">
                  <span className="text-secondary">
                    <i className="fa fa-user me-2 " aria-hidden="true"></i>
                    آخرین بروزرسانی :
                    <span className="text-dark px-2">1399/8/3 </span>
                  </span>
                </li>
              </ul>
              <div className="mx-auto text-center">
                <button
                  onClick={(e) => hanleSendToCart(e)}
                  className="btn-1 py-2 px-5  mx-auto  text-white"
                >
                  ثبت نام در این دوره
                </button>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-8 ">
            <div
              className="border p-4 dark-shadow
            "
            >
              <span>
                <Img
                  className="img-fluid"
                  src={[
                    `https://toplearnapi.ghorbany.dev/${course.imageUrl}`,
                    "../image/imgnull.jpg",
                  ]}
                  alt="1"
                />
              </span>
              <h1 className="h5 mt-5">{course.title}</h1>
              <p className="lead py-3 text-size">{course.info}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Course;
