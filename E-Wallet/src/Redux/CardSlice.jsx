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
    setIsAddingNewCard: (state, action) => {
      state.isAddingNewCard = action.payload;
    },
    // New reducer to handle updating the order of cards
    updateCardOrder: (state, action) => {
      state.cards = action.payload;
    },
  },
});

// Exporting all actions, including the new updateCardOrder
export const { addCard, removeCard, setActiveCard, updateCard, setIsAddingNewCard, updateCardOrder } = cardSlice.actions;

export default cardSlice.reducer;
