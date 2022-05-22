//! This is our State
import { createSlice } from '@reduxjs/toolkit';

// const storage = localStorage.getItem("user");
// const initialState = {
//  user: JSON.parse(storage)
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState, 

//   reducers: {
//     register: (state, action) =>{
//       state.user = action.payload;
//     },
//     login: (state, action) =>{
//       state.user = action.payload;
//       localStorage.setItem('user', JSON.stringify(state.user));
//     },
//     forgetPassword: (state, action) =>{
//       state.user = action.payload;
//     },
//     logout: (state, action) =>{
//       state.user = null;
//     }
//   },
// });

// export const user = (state) => state.user.user;  console.log("user",user);
// export const { register, login, forgetPassword, logout } = userSlice.actions;

const initialState = {};

const userSlice = createSlice({
    name: 'user',
    initialState, 
  
    reducers: {
      saveUser: (state, action) => {
        state.value = action.payload;
      },
    },
});

export const { saveUser } = userSlice.actions;
export default userSlice.reducer;