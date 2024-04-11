import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    activeCardIndex: null,
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard: (state, action) => {
      state.cards = state.cards.filter((card, index) => index !== action.payload);
    },
    setActiveCard: (state, action) => {
      state.activeCardIndex = action.payload;
    },
    updateCard: (state, action) => {
      const { index, updatedCardData } = action.payload;
      state.cards[index] = updatedCardData;
    },
  },
});

export const { addCard, removeCard, setActiveCard, updateCard } = cardSlice.actions;

export default cardSlice.reducer;
