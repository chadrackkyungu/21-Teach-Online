//! This is our State
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "chad",
  email:"chadrackkyungu624@gmail.com"
};

const userSlice = createSlice({
  name: 'user',
  initialState, 

  reducers: {
    register: (state, action) =>{
        console.log("register");
    },
    login: (state, action) =>{
        console.log("login");
    },
    forgetPassword: (state, action) =>{
        console.log("forget password");
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