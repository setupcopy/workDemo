
export interface IUserAddType {
  email:string;
  password:string;
  passwordConfirmed:string;
  role:string;
  nickName:string;
};

export interface IPagination {
  pageNumber:number;
  pageSize:number;
}

export interface IUser {
  id:number;
  email:string;
  role:string;
  nickName:string;
  createdAt:string;
  updatedAt:string;
}

export interface IUserSearchRespons {
  users:IUser[];
  totalCount:number;
  pageSize:number;
  currentPage:number;
  totalPages:number;
}
