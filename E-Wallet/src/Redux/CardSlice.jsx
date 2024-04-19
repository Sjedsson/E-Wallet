import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'card',
  initialState: {
    cards: [],
    activeCardIndex: null,
    isAddingNewCard: false,
  },
  reducers: {
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    removeCard(state, action) {
      const index = action.payload;
      state.cards.splice(index, 1);
      localStorage.setItem('cards', JSON.stringify(state.cards));
    },
    setActiveCard: (state, action) => {
      state.activeCardIndex = action.payload;
    },
    updateCard: (state, action) => {
      const { index, updatedCardData } = action.payload;
      state.cards[index] = updatedCardData;
    },
    setIsAddingNewCard: (state, action) => {
      state.isAddingNewCard = action.payload;
    },
    updateCardOrder: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { addCard, removeCard, setActiveCard, updateCard, setIsAddingNewCard, updateCardOrder } = cardSlice.actions;

export default cardSlice.reducer;
