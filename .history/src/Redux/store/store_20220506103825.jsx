import { configureStore } from '@reduxjs/toolkit';
import  cartSlice  from '../Slices/cartSlice';
import modalSlice from '../Slices/modalSlice'

export const store = configureStore({
  reducer: {
      cart: cartSlice, //the name cart should always be the same as the one inside cartSlice on line 12
      modal: modalSlice,
  }
});