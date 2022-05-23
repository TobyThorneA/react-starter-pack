import { createAction } from '@reduxjs/toolkit';
import { IComment } from '../types/comment';
import { IGuitar } from '../types/guitar';

export const loadGuitars = createAction<IGuitar[]>('load/guitars');
export const loadCurrentGuitar = createAction<IGuitar>('load/guitar');
export const loadComments = createAction<IComment[]>('load/comments');
export const loadNextComments = createAction<number>('load/nextComments');
export const characteristicOrDescriptionAction = createAction<boolean>('state/choice');
export const openCartAddPopup = createAction<boolean>('open/cartAddPopup');
export const closePopupCartSuccess = createAction<boolean>('close/seccessCart');
