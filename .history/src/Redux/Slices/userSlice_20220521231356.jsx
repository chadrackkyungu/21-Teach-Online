//! This is our State
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 user:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState, 

  reducers: {
    register: (state, action) =>{
      state.user = action.payload;
    },
    login: (state, action) =>{
      state.user = action.payload;
    },
    forgetPassword: (state, action) =>{
      state.user = action.payload;
    },
    logout: (state, action) =>{
      state.user = null;
    }
  },
});

//go inside [initialState] & pull me out user
export const user = (state) => state.user.user; 

//Actions
export const { register, login, forgetPassword } = userSlice.actions;

// Export Slice
export default userSlice.reducer;