import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router";
import { toast } from "react-toastify";
import { clearUser } from "../../Actions/Login/login";

const Logout = ({ history }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("token");
    dispatch(clearUser());
    toast.warning("خروج با موفقیت انجام شد", { position: "bottom-right" });
    history.push("/");
  }, []);
  return null;
};

export default withRouter(Logout);
