import axios from "axios";
import { fetchFail, fetchStart, blogSuccess } from "../features/blogSlice";

import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom"
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCall = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate()

  const BASE_URL = "https://32228.fullstack.clarusway.com/";

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}api/blogs/`);
      dispatch(blogSuccess(data));
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      //   toastErrorNotify("error!!!")
    }
  };

  return { getBlogs };
};

export default useBlogCall;
