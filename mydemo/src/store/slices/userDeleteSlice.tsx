import React from "react";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { userDeleteApi } from "../../apis/userApi";

export const userDeleteAsync = createAsyncThunk(
  "users/delete",
  async (id: number) => {
    try {
      const result = await userDeleteApi(id);
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

const userDeleteSlice = createSlice({
  name: 'usersearch',
  initialState: {
    resMsg:'',
    error:''
  },
  reducers: {},
  extraReducers: {
    [userDeleteAsync.fulfilled.type]: (state) => {
      state.resMsg = "successful";
    },
    [userDeleteAsync.rejected.type]: (state, action) => {
      state.error = action.error.message;
      state.resMsg = "failed";
    }
  },
});

export default userDeleteSlice.reducer; 