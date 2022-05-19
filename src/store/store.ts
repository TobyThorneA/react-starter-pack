import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createAPI } from './api';
import { guitarReducer } from './reducers/guitar-reducer';
import { commentReducer } from './reducers/comment-reducer';
import { cartAddReducer } from './reducers/cart-add-reducer';

export const api = createAPI();

const rootReducer = combineReducers({
  guitarReducer,
  commentReducer,
  cartAddReducer,
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
