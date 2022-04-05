import axios from 'axios';
import qs from 'qs';
import { CONFIG_APP, LOCAL_STORAGE_KEY } from 'src/constants/common';
import { storage } from 'src/utils/standardizedData';

/**
 * description: customize axios, add request configs and capture response states 
 * @param {string} Authorization - description: accessToken 
 * @param {string} Accept - description: Config type of request in header
 * @return {Promise} description
 */
const instance = axios.create({
  baseURL: CONFIG_APP.PUBLIC_URL,
  paramsSerializer: (params: any) => qs.stringify(params, { arrayFormat: 'repeat' }),
  timeout: 100000,
});

instance.interceptors.request.use(
  async (config: any): Promise<any> => {
    const idToken: string = storage(LOCAL_STORAGE_KEY.ACCESS_TOKEN_APP).token.toString();
    const common: any = {
      Accept: 'application/json, text/plain, */*',
      Authorization: `Bearer ${idToken}`,
      //more settings
    };

    config.headers = common;

    return config;
  },
  error => {
    Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (res: any): any => {
    if (res.status === 200 && res.data) {
      return res;
    } else {
      return Promise.reject(null);
    }
  },
  async error => {
    // Check error;
    return Promise.reject(error);
  },
);

export default instance;