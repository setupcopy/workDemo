import React from "react";
import {configureStore } from '@reduxjs/toolkit';
import userAddSlice from './slices/userAddSlice';
import userSearchSlice from './slices/userSearchSlice';
import userDeleteSlice from './slices/userDeleteSlice';

const store = configureStore({
  reducer:{
    useradd:userAddSlice,
    usersearch:userSearchSlice,
    userdelete:userDeleteSlice
  }
});

//redux with typescript should define the type of RootState which is used by useSelector
export type RootState = ReturnType<typeof store.getState>;
export default store;