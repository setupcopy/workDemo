import React from 'react';
import { useSnackbar, VariantType } from 'notistack';

export const MessageDescribe = {
  SIGNUP_FAILED:'Signup is failed',
  USER_DELETE_FAILED:'Delete is failed'
};

export const useNotification = () => {
  const snackbarQueue = useSnackbar();

  const ShowNotification = (message:string,type:VariantType) => {
      snackbarQueue.enqueueSnackbar(message,{variant:type});
  };

  return {ShowNotification}
};