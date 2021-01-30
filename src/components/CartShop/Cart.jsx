import React, { Fragment } from "react";
import Footer from "../commen/Footer";
import Header from "../commen/Header";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../Actions/Cart/CartActions";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = (prop) => {
  const AllCourse = useSelector((state) => state.carts);
  const user = useSelector((state) => state.userInformation);
  let x = 0;
  const dispatch = useDispatch();
  const handletotal = () => {
    let mytotal = 0;
    AllCourse.map((course) => (mytotal = mytotal + course.price));
    return mytotal;
  };

  const handleDelete = (id) => {
    dispatch(removeCart(id));
    toast.success("دوره حذف شد", { position: "bottom-right" });
  };

  if (!user.fullname) {
    toast.error("لطفا ابتدا وارد شوید ", { position: "bottom-right" });
    prop.history.push("/login");
  }
  return (
    <Fragment>
      <Header />
      <div className="header"></div>
      <div className="container-fluid my-5 py-5">
        {AllCourse.length === 0 ? (
          <div className="border shadow-sm px-5 py-5  my-5 text-center ">
            <h1 className="text-muted my-5"> سبد خالی است !</h1>
            <Link to="/courses">بازگشت به فروشگاه</Link>
          </div>
        ) : (
          <div className="row py-5">
            <div className="col-12 col-md-8">
              <div className="border mb-2 mb-md-0 shadow-sm px-md-5 py-3 ms-md-3">
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">تصویر</th>
                        <th scope="col">محصول</th>
                        <th scope="col">قیمت</th>
                        <th scope="col">#</th>
                      </tr>
                    </thead>
                    <tbody>
                      {AllCourse.map((course) => (
                        <tr key={course._id + 1}>
                          <th scope="row">{(x = x + 1)}</th>
                          <td>
                            <img
                              width="70px"
                              src={`https://toplearnapi.ghorbany.dev/${course.imageUrl}`}
                              alt="1"
                            />
                          </td>
                          <td>{course.title}</td>
                          <td>{course.price}</td>
                          <td>
                            <button
                              className="btn-sm btn-close"
                              onClick={() => handleDelete(course._id)}
                            ></button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 ">
              <div className="border shadow-sm p-3 me-md-3 ">
                <h4> جمع کل سبدخرید</h4>

                <div className="row pt-4 align-items-md-center">
                  <div className="col-3">جمع جزء </div>
                  <div className="col-9">
                    <ul className="list-unstyled list-group">
                      {AllCourse.map((course) => (
                        <li key={course._id + 2} className="list-group-item">
                          <span>{course.price}</span>
                          <span>تومان</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="row pt-4 align-items-md-center">
                  <div className="col-3">جمع کل : </div>
                  <div className="col-9">
                    <ul className="list-unstyled list-group">
                      <li className="list-group-item">
                        {handletotal()}
                        <span>تومان</span>
                      </li>
                    </ul>
                  </div>
                  <hr className="mt-3" />
                </div>
                <div className="text-center">
                  <button className="btn btn-info text-white px-5 py-2">
                    پرداخت
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Fragment>
  );
};

export default Cart;
