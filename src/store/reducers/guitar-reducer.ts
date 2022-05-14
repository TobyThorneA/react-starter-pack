import { createReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IGuitar } from '../../types/guitar';
import { loadAllGuitars } from './actions';

interface GuitarState {
    guitars: IGuitar[];
    isLoading: boolean;
    error: string;
}

const initialState: GuitarState = {
  guitars: [],
  isLoading: true,
  error: '',
};

export const guitarSlice = createSlice({
  name: 'guitar',
  initialState,
  reducers: {
    guitarFetching(state){
      state.isLoading = true;
    },
    guitarFetchingSuccess(state, action: PayloadAction<IGuitar[]>){
      state.isLoading = false;
      state.error = '';
      state.guitars = action.payload;
    },
    guitarFetchingError(state, action: PayloadAction<string> ){
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

const guitarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadAllGuitars, (state,action) => {
      // eslint-disable-next-line no-console
      console.log('guitarsReducer0', state.guitars);
      state.guitars = action.payload;
      // eslint-disable-next-line no-console
      console.log('guitarsReducer1', state.guitars);
    });
});

export {guitarReducer};

export default guitarSlice.reducer;
