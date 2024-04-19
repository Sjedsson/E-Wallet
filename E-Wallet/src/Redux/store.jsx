import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './CardSlice';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch {

  }
};


const persistedState = loadState();

const store = configureStore({
  reducer: {
    card: cardReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState({
    card: store.getState().card,
  });
});

export default store;
