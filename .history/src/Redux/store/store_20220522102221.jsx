import { configureStore } from '@reduxjs/toolkit';
import  cartSlice  from '../Slices/cartSlice';
import modalSlice from '../Slices/modalSlice'
import userSlice from '../Slices/userSlice'

export const Redux_store = configureStore({
  reducer: {
      user: userSlice,
      cart: cartSlice, //the name cart should always be the same as the one inside cartSlice on line 12
      modal: modalSlice,
  }
});