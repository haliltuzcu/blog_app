import axios from "axios";
import { fetchFail, fetchStart, loginSuccess } from "../features/blogSlice";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useBlogCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const BASE_URL = "https://32228.fullstack.clarusway.com/";

  const getBlog = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}users/auth/login/`);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login performed");
      navigate("/home");
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { getBlog };
};

export default useBlogCall;
