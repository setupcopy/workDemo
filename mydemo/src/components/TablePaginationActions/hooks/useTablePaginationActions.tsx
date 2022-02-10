import React from 'react';
import { useDispatch } from 'react-redux';
import {userSearchAsync} from '../../../store/slices/userSearchSlice';
import {IPagination} from '../../../models/userModels';

const pagination:IPagination = {
  pageNumber:1,
  pageSize:5
};

export const useTablePaginationActions = (page:number) => {
  const dispatch = useDispatch();

  const handleBackButtonClick = () =>{
    pagination.pageNumber = page;
    dispatch(userSearchAsync(pagination));
  };

  const handleNextButtonClick = () =>{
    pagination.pageNumber = page + 2;
    dispatch(userSearchAsync(pagination));
  };

  return {handleBackButtonClick,handleNextButtonClick};
}