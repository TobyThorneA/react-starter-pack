import axios, { AxiosInstance } from 'axios';

const BECKEND_URL = 'https://guitar-shop.accelerator.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BECKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
