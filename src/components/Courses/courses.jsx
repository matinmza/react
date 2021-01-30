import React, { Fragment } from "react";
import { Img } from "react-image";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Courses = () => {
  const allCourses = useSelector((state) => state.allCourses);

  return (
    <Fragment>
      {allCourses.map((course) => (
        <div
          className="col-sm-6 col-lg-4 d-flex align-items-stretch"
          key={course._id}
        >
          <div className="card radius mb-3 minHeight-1">
            <Img
              src={[
                `https://toplearnapi.ghorbany.dev/${course.imageUrl}`,
                "../image/imgnull.jpg",
              ]}
              className="card-img-top minSizeImag radius x"
              alt="12"
            />
            <div className="card-body d-flex flex-column justify-content-around bg-white radius margin-2">
              <Link to={`/course/${course._id}`}>
                <h5 className="card-title">{course.title}</h5>
              </Link>
              <p className="card-text">
                {course.info.slice(0, 100)}...
                <div>
                  <Link to="/">ادامه توضیحات</Link>
                </div>
              </p>
              <hr />

              <div className="d-flex justify-content-between align-items-center ">
                <span className="tex">
                  04:12:20
                  <i className="bi bi-clock-history vertical-icon3 mx-2"></i>
                </span>
                <span className="text-danger">
                  {course.price === 0 ? (
                    <span>رایگان</span>
                  ) : (
                    <span>{course.price} تومان</span>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Courses;
