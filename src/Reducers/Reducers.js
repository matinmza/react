import { loadingBarReducer } from "react-redux-loading-bar";
import { combineReducers } from "redux";
import {
  loginEmailReducer,
  loginPasswordReducer,
  userReducer,
} from "./Login/login";
import { cartReducer } from "./Cart/CartReducer";
import { allCoursesReducer } from "./courses/CoursesReducer";
import { courseReducer } from "./courses/courseReducer";
import {
  userNameReducer,
  userEmailReducer,
  userPasswordReducer,
} from "./register/registerReducers";

export const Reducers = combineReducers({
  fullnameRegister: userNameReducer,
  emailRegister: userEmailReducer,
  passwordRegister: userPasswordReducer,
  emailLogin: loginEmailReducer,
  passwordLogin: loginPasswordReducer,
  userInformation: userReducer,
  loadingBar: loadingBarReducer,
  allCourses: allCoursesReducer,
  course: courseReducer,
  carts: cartReducer,
});
