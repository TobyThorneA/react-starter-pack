import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { IGuitar } from '../../types/guitar';
import { api, setupStore } from '../store';
import { loadAllGuitars } from './actions';
// import { guitarSlice } from './guitar-reducer';

// export const fetchGuitar = () => async (dispatch: AppDispatch) => {
//   try{
//     dispatch(guitarSlice.actions.guitarFetching());
//     const response = await axios.get<IGuitar[]>
//     ('https://guitar-shop.accelerator.pages.academy/guitars');
//     dispatch(guitarSlice.actions.guitarFetchingSuccess(response.data));
//   }catch(e){
//     return e;
//   }
// };
const store = setupStore();

export const fetchGuitars = createAsyncThunk(
  'guitars/fetchGuitars',
  async () => {
    try{
      const {data} = await api.get<IGuitar[]>('/guitars');
      // eslint-disable-next-line no-console
      console.log('dataGuitars', data);
      // store.dispatch(loadAllGuitars(data));
      store.dispatch(gi)
    }catch(e){
      return e;
    }
  },
);

