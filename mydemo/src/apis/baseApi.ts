import { httpCodeStatuse } from './models/models';

const HAS_RETURN_DATA = true;
const NO_RETURN_DATA = false;

const callApi = <T>(url: string, requestType: string,isReturnData:boolean,headers: HeadersInit, body?: T) => {
  const headersDefault: HeadersInit = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  const requrestInfo: RequestInit = {
    method: requestType,
    mode: "cors",
    headers: {...headersDefault,...headers}
  };

  if (body) {
    requrestInfo.body = JSON.stringify(body);
  }

  return new Promise((resolve, reject) => {
    fetch(url, requrestInfo).then((response) => {
      if (response.status !== httpCodeStatuse.HttpSuccessCode) {
        throw new Error(response.status.toString());
      }

      if (isReturnData) {
        resolve(response.json());
      }else {
        resolve(response);
      }   
    }).catch((error) => {
      reject(error);
    });
  });
};

//basic fetch get request, return an instance of promise
const get = (url: string, headers: HeadersInit = {}) => {
  return callApi(url, 'get',HAS_RETURN_DATA,headers);
};

const post = <T>(url: string, body: T, headers: HeadersInit = {}) => {
  return callApi(url, 'post',NO_RETURN_DATA,headers,body);
};

const postWithRepData = <T>(url: string,body: T, headers: HeadersInit = {}) => {
  return callApi(url, 'post',HAS_RETURN_DATA,headers,body);
};

const put = <T>(url: string, body: T,headers: HeadersInit = {}) => {
  return callApi(url, 'put',NO_RETURN_DATA,headers,body);
};

const del = (url: string, headers: HeadersInit = {}) => {
  return callApi(url, 'delete',NO_RETURN_DATA,headers);
};

export { get, post, postWithRepData, put, del };
