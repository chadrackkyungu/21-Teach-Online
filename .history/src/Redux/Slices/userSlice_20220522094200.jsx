//! This is our State
import { createSlice } from '@reduxjs/toolkit';

import { signOut } from 'firebase/auth';
import { auth } from '../../Database/init-firebase';

const storage = localStorage.getItem("user");
const initialState = {
 user: JSON.parse(storage)
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
      localStorage.setItem('user', JSON.stringify(state.user));
    },
    forgetPassword: (state, action) =>{
      state.user = action.payload;
    },
    logout: (state) =>{
      state.user = null;
      localStorage.removeItem("user")
      return signOut(auth)
    }
  },
});

//go inside [initialState] & pull me out user
export const user = (state) => state.user.user;  console.log("user",user);
//Actions
export const { register, login, forgetPassword, logout } = userSlice.actions;
// Export Slice
export default userSlice.reducer;