import { combineReducers, configureStore } from '@reduxjs/toolkit';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import  guitarReducer  from './reducers/guitar-reducer';
// import {}, guitarReducer from './reducers/guitar-reducer';
const rootReducer = combineReducers({
  guitarReducer,
});

const DATA_USER = 'data-user';

export type DataUser = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
}

export const getDataUser = (): DataUser => {
  const dataUser = localStorage.getItem(DATA_USER);
  return dataUser? JSON.parse(dataUser) : '';
};

const BECKEND_URL = 'https://guitar-shop.accelerator.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = ():AxiosInstance => {
  const api = axios.create({
    baseURL: BECKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });
  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const dataUser = getDataUser();

      if (dataUser.token) {
        config.headers['x-token'] = dataUser.token;
      }

      return config;
    },
  );
  return api;
};

export const api = createAPI();

export const setupStore1 = () =>
  configureStore({
    reducer: rootReducer,
  });

export const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  //   middleware: (getDefaultMiddleware) =>
  //     getDefaultMiddleware({
  //       thunk: {
  //         extraArgument: api,
  //       },
  //     }),
  });

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});


export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']
