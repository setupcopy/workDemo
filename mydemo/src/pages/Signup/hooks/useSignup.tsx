import React from 'react';
import {useNotification,MessageDescribe} from '../../../hooks/useNotification';
import {IUserAddType} from '../../../models/userModels';
import { useDispatch } from 'react-redux';
import {userAddAsync} from '../../../store/slices/userAddSlice';

export const useSignup = () => {
  const {ShowNotification} = useNotification();
  const dispatch = useDispatch();

  const onClickSignup = (values:IUserAddType) => {
    try {
      dispatch(userAddAsync(values));
      ShowNotification('Signup is successful','success');
    } catch (error) {
      ShowNotification(MessageDescribe.USER_DELETE_FAILED,'error');
    }
  };

  return {onClickSignup };
};