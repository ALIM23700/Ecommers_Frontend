import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (filters = {}) => {
    const { category, minPrice, maxPrice, search } = filters;
    let query = [];
    if (category) query.push(`category=${category}`);
    if (minPrice) query.push(`minPrice=${minPrice}`);
    if (maxPrice) query.push(`maxPrice=${maxPrice}`);
    if (search) query.push(`search=${search}`);
    const queryString = query.length ? `?${query.join("&")}` : "";

    const res = await axios.get(`${API_URL}/api/v1/products${queryString}`);
    return res.data.products;
  }
);

const productSlice = createSlice({
  name: "posts",
  initialState: {
    isLoading: false,
    posts: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
      state.error = null;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
