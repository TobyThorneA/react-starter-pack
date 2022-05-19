import { createReducer } from '@reduxjs/toolkit';
import { IComment } from '../../types/guitar';
import { loadComments, loadNextComments } from '../actions';

interface commentState {
  comments: IComment[]
  lastcomment: number
}

const initialState: commentState = {
  comments: [],
  lastcomment: 3,
};

const commentReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(loadNextComments, (state, action) => {
      state.lastcomment += action.payload;
    });
});

export {commentReducer};
