import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { generateId } from '../utils';

interface Item {
  id: number;
  title: string;
  newId: number;
}

export interface SelectedState {
  data: Item[]
}

const initialState: SelectedState = {
  data: [],
}

export const selectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<Item, 'newId'>>) => {
      state.data = [...state.data, {
        ...action.payload,
        newId: generateId()
      }]
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(d => d.newId !== action.payload)
    },
  },
})

export const { addItem, removeItem } = selectedSlice.actions

export default selectedSlice.reducer