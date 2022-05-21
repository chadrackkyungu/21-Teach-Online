//! This is our State
import axios from 'axios';
import { createAsyncThunk,createSlice } from '@reduxjs/toolkit'; //this is when you are working with an  //! API
// import cartItems from '../../cartItems'; 
const url = 'https://course-api.com/react-useReducer-cart-project';

//* Using Fetch
// export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
//   return fetch(url)
//     .then((resp) => resp.json())
//     .catch((err) => console.log(err));
// });

//* Using Axios
export const getCartItems = createAsyncThunk('cart/getCartItems', async (thunkAPI) => {
 try {
   console.log(thunkAPI);
   const resp = await axios(url);
   return resp.data;
 } catch (err) {
   console.log(err);
 }
});


const initialState = {
  // cartItem: cartItems,  //! before the API, i was using the Object
  cartItem: [],
  
  amount: 6,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState, // state

  reducers: {
    ClearCart: (state) => {
      state.cartItem = []; // empty the state
      state.amount = 0
    },

    removeItem: (state, action) => { console.log(action);
      const id = action.payload;  console.log(id); // action payload it is the ID 
      state.cartItem = state.cartItem.filter((item) => item.id !== id);
    },

    increase: (state, { payload }) => {
      console.log(payload);

      const cartItem = state.cartItem.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, { payload }) => {
      const cartItem = state.cartItem.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },

    calculateTotals: (state) => {
      console.log(state);
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },


  //! whenever working with and API
  extraReducers:{
    [getCartItems.pending]: (state) =>{
      state.isLoading = true
    },

    [getCartItems.fulfilled]: (state, action) =>{
      console.log(action);
      state.isLoading = false;
      state.cartItem = action.payload // here am passing the data from the API to to my initial state call [cartItem]
    },

    [getCartItems.rejected]: (state) =>{
      state.isLoading = false;
    }
  }

});

//go inside [initialState] & pull me out cartItem
export const cartItem = (state) => state.cart.cartItem
export const amount = (state) => state.cart.amount
export const total = (state) => state.cart.total
export const isLoading = (state) => state.cart.isLoading

//Actions
export const { ClearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

// Export Slice
export default cartSlice.reducer;