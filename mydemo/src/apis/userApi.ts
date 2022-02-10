import { postWithRepData,get,del } from './baseApi';
import { dataType } from './models/models';
import {IUserAddType} from '../models/userModels';

const userAddApi = async (user: IUserAddType) => {
  //url for api
  const url: string = `/api/users`;

  try {
    const result = await postWithRepData(url,user);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

const userSearchApi = async (pageNumber:number,pageSize:number) => {
  //url for api
  const url: string = `/api/users?pagenumber=${pageNumber}&pagesize=${pageSize}`;

  try {
    const result = await get(url);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

const userDeleteApi = async (id:number) => {
  //url for api
  const url: string = `/api/users/${id}`;

  try {
    const result = await del(url);
    return result;
  } catch (error: any) {
    throw new Error(error);
  }
};

export { userAddApi,userSearchApi,userDeleteApi };