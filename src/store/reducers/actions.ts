import { createAction } from '@reduxjs/toolkit';
import { IGuitar } from '../../types/guitar';

export const loadAllGuitars = createAction<IGuitar[]>('');
