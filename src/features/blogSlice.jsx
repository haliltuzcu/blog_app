import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
  name: "blog",

  initialState: {
    blogs: [],
    details: [],
    likes: "",
    loading: false,
    error: false,
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    blogSuccess: (state, { payload }) => {
      state.loading = false;
      state.blogs = payload;
    },
    detailGet: (state, { payload: { data, id } }) => {
      state.loading = false;
      state[id] = data;
    },
    getSuccessDetails: (state, { payload: { data } }) => {
      state.loading = false;
      state.details = data;
    },
    postLike: (state, { payload }) => {
      state.loading = false;
      state.likes = payload;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  blogSuccess,
  fetchFail,
  postLike,
  detailGet,
  getSuccessDetails,
} = blogSlice.actions;
export default blogSlice.reducer;
