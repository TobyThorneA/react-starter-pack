import { createReducer } from '@reduxjs/toolkit';
import { IGuitar } from '../../types/guitar';
import { characteristicOrDescriptionAction, loadCurrentGuitar, loadGuitars } from '../actions';

interface GuitarState {
    guitars: IGuitar[];
    currentGuitar: IGuitar;
    characteristicOrDescription: boolean;
    // isLoading: boolean;
    // error: string;
}

const defaultGuitar = {
  id: 0,
  name: '',
  vendorCode: '',
  type: '',
  description: '',
  previewImg: '',
  stringCount: 0,
  rating: 0,
  price: 0,
};

const initialState: GuitarState = {
  guitars: [],
  currentGuitar: defaultGuitar,
  characteristicOrDescription: true,
  // isLoading: true,
  // error: '',
};

// const guitarReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(loadGuitars, (state,action) => {
//       state.guitars = action.payload;
//     });
// });

const guitarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state,action) => {
      state.guitars = action.payload;
    })
    .addCase(loadCurrentGuitar, (state, action) => {
      state.currentGuitar = action.payload;
    })
    .addCase(characteristicOrDescriptionAction, (state,action) => {
      state.characteristicOrDescription = action.payload;
    });
});

export {guitarReducer};
