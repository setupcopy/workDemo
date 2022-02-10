import React from 'react';
import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import {userSearchApi} from '../../apis/userApi';
import {IPagination} from '../../models/userModels';
import {IUserSearchRespons,IUser} from '../../models/userModels';

export const userSearchAsync = createAsyncThunk(
  "users/search",
  async (page:IPagination) => {
    try {
      const result = await userSearchApi(page.pageNumber,page.pageSize);
      return result;
    } catch (error: any) {
      throw new Error(error);
    }
  }
);

const users:IUser[] = [{
  id:0,
  email:'',
  role:'',
  nickName:'',
  createdAt:'',
  updatedAt:''
}]
const usersWithPagnation:IUserSearchRespons = {
  users,
  totalCount:0,
  pageSize:0,
  currentPage:0,
  totalPages:0,
}; 

const userSearchSlice = createSlice({
  name: 'usersearch',
  initialState: {
    usersWithPagnation,
    resMsg:'',
    error:''
  },
  reducers: {},
  extraReducers: {
    [userSearchAsync.fulfilled.type]: (state, action) => {
      state.usersWithPagnation = action.payload;
      state.resMsg = "successful";
    },
    [userSearchAsync.rejected.type]: (state, action) => {
      state.error = action.error.message;
      state.resMsg = "failed";
    }
  },
});

export default userSearchSlice.reducer; 