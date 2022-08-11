import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user: null,
};



//
export const userSlice = createSlice({ // the userSlice is were we store the user's information
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: { // the user's have functions which allow us to manipulate the state
    //when you have an action, you get the state which is the actual state of the slice
    //when we login, whe get an action
    login: (state, action) => { //login action -> //despatch an action to change the user
      state.user = action.payload; // payload is an object that we pass along with it
    },
    logout: (state, action) => { // logout action
      state.user = null; // when we logout, the user get set back to null
    },
  },
});

export const { login, logout } = userSlice.actions; //destructure userSlice.action to login and logout and export them


//these are called selectors
export const selectUser = (state) => state.user.user; // this will allow us to pull information from the data layer when we need to

export default userSlice.reducer;
