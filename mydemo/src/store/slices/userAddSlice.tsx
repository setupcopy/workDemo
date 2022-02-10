import React from "react";
import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";
import { userAddApi } from "../../apis/userApi";
import { IUserAddType,IUser } from "../../models/userModels";

export const userAddAsync = createAsyncThunk(
  "users/add",
  async (user: IUserAddType) => {
    try {
      const result = await userAddApi(user);
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

const user = {
  id:0,
  email:'',
  role:'',
  nickName:'',
}

const userAddSlice = createSlice({
  name: "useradd",
  initialState: {
    user,
    resMsg:'',
    error:''
  },
  reducers: {},
  extraReducers: {
    [userAddAsync.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.resMsg = "successful";
    },
    [userAddAsync.rejected.type]: (state, action) => {
      state.error = action.error.message;
      state.resMsg = "failed";
    }
  },
});

export default userAddSlice.reducer;
