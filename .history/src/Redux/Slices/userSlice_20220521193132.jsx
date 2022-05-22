//! This is our State
import { createSlice } from '@reduxjs/toolkit';
import { auth } from '../../Database/init-firebase';
import {  createUserWithEmailAndPassword, //* this will create: email, password,
          signInWithEmailAndPassword, //* this is to signIn with
          onAuthStateChanged, //* this check any change of signed in and signed out
          signOut, //* signout
          GoogleAuthProvider,
          signInWithPopup,
          sendPasswordResetEmail,
          confirmPasswordReset,
          updateEmail
 } from 'firebase/auth';

const initialState = {
 user:null,
};

const userSlice = createSlice({
  name: 'user',
  initialState, 

  reducers: {
    register: (state, action) =>{
      state.user = action.payload;
      return createUserWithEmailAndPassword(auth, state.user.email, state.user.password);
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

//go inside [initialState] & pull me out cartItem
export const name = (state) => state.user.name; ///console.log(name);
export const email = (state) => state.user.email;

//Actions
export const { register, login, forgetPassword } = userSlice.actions;

// Export Slice
export default userSlice.reducer;