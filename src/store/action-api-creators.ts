import { createAsyncThunk } from '@reduxjs/toolkit';
import { PostComment } from '../types/comment';
import { loadComments, loadCurrentGuitar, loadGuitars } from './actions';
import { createAPI } from './api';
import { store } from './store';

const api = createAPI();

export const fetchGuitarsAction = createAsyncThunk(
  'guitars/fetchGuitars',
  async () => {
    try{
      const {data} = await api.get('/guitars?_limit=27');
      store.dispatch(loadGuitars(data));
    }catch(error){
    //   errorHandle(error);
      return error;
    }
  },
);

export const fetchCommentsAction = createAsyncThunk(
  'comments/fetchComments',
  async (id: number) => {
    try{
      const {data} = await api.get(`/guitars/${id}/comments`);
      store.dispatch(loadComments(data));
    }catch(error){
    //   errorHandle(error);
      return error;
    }
  },
);

export const fetchCurrentGuitarAction = createAsyncThunk(
  'guitar/currentGuitar',
  async (id: number) => {
    try{
      const {data} = await api.get(`/guitars/${id}`);
      store.dispatch(loadCurrentGuitar(data));
    }catch(error){
    //   errorHandle(error);
      return error;
    }
  },
);

export const commentsPostAction = createAsyncThunk(
  'comment/postComment',
  async(postComment:PostComment, {getState} : any) => {
    try{
      const comments = getState().commentReducer.comments;
      const {data} = await api.post('comments', postComment );
      await api.post('comments', postComment );
      const newComment = [...comments, data];
      store.dispatch(loadComments(newComment));
    }catch(error){
      return error;
    }
  },
);
