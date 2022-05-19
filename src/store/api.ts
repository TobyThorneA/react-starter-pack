import axios, { AxiosInstance } from 'axios';

// const DATA_USER = 'data-user';

// export type DataUser = {
//   avatarUrl: string;
//   email: string;
//   id: number;
//   name: string;
//   token: string;
// }

// export const getDataUser = (): DataUser => {
//   const dataUser = localStorage.getItem(DATA_USER);
//   return dataUser? JSON.parse(dataUser) : '';
// };

const BECKEND_URL = 'https://guitar-shop.accelerator.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BECKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  // api.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  //     const dataUser = getDataUser();

  //     if (dataUser.token) {
  //       config.headers['x-token'] = dataUser.token;
  //     }

  //     return config;
  //   },
  // );
  return api;
};
