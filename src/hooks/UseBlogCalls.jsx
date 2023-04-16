import axios from "axios";
import {
  fetchFail,
  fetchStart,
  blogSuccess,
  postLike,
  getSuccessDetails,
} from "../features/blogSlice";

import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
// import { useNavigate } from "react-router-dom"
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCall = () => {
  const dispatch = useDispatch();
  //   const navigate = useNavigate()
  const { axiosWithToken } = useAxios();
  const BASE_URL = "https://32228.fullstack.clarusway.com/";

  const getBlogs = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.get(`${BASE_URL}api/blogs/`);
      dispatch(blogSuccess(data));
      // console.log(data)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
        // toastErrorNotify("error!!!")
    }
  };
  const postLikes = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`${BASE_URL}api/likes/${id}/`);
      dispatch(postLike(data, id));
      getBlogs();
      // console.log(data)
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      //   toastErrorNotify("error!!!")
    }}
    const getDetail = async (id) => {
      dispatch(fetchStart());
      try {
        const { data } = await axiosWithToken.get(
          `${BASE_URL}api/blogs/${id}/`
        );

        dispatch(getSuccessDetails({data}))
        // getBlogs()
        // console.log(data)
      } catch (error) {
        dispatch(fetchFail());
        console.log(error);
        //   toastErrorNotify("error!!!")
      }
    }
    return { getBlogs, postLikes, getDetail };
};

export default useBlogCall;
