import React,{useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import {userSearchAsync} from '../../../store/slices/userSearchSlice';
import {userDeleteAsync} from '../../../store/slices/userDeleteSlice';
import {IPagination} from '../../../models/userModels';
import {useNotification,MessageDescribe} from '../../../hooks/useNotification';

const PAGENUMBER_DEFAULT = 1;
const PAGESIZE_DEFAULT = 5;

const pagination:IPagination = {
  pageNumber:PAGENUMBER_DEFAULT,
  pageSize:PAGESIZE_DEFAULT
};

export const useUserList = () => {
  const [open,setOpen] = useState(false);
  const {ShowNotification} = useNotification();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userSearchAsync(pagination));
  },[]);

  const handleDeleteButtonClick = (id:number) => {
    try {
      dispatch(userDeleteAsync(id));
    } catch (error) {
      ShowNotification(MessageDescribe.USER_DELETE_FAILED,'error');
    }
  }; 

  return {handleDeleteButtonClick,open,setOpen};
};