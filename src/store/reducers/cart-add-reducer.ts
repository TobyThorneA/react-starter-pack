import { createReducer } from '@reduxjs/toolkit';
import { closePopupCartSuccess, openCartAddPopup } from '../actions';

interface CartAdd {
  openCartAddPopup: boolean,
  closeCartSuccess: boolean,
}

const initialState: CartAdd = {
  openCartAddPopup: false,
  closeCartSuccess: false,
};

const cartAddReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(openCartAddPopup, (state, action) => {
      state.openCartAddPopup = action.payload;
    })
    .addCase(closePopupCartSuccess,(state, action) => {
      state.closeCartSuccess = action.payload;
    });

});

export {cartAddReducer};
