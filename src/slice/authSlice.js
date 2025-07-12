// src/store/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth', //名稱
  initialState: { //初始數值
    isLoggedIn: localStorage.getItem('fakeLogin') === 'true',
    useremail: localStorage.getItem('fakeEmail') || '',
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.useremail = action.payload.email;
      localStorage.setItem('fakeLogin', 'true');
      localStorage.setItem('fakeEmail', action.payload.email);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.useremail = '';
      localStorage.removeItem('fakeLogin');
      localStorage.removeItem('fakeEmail');
    },
  },
});

export const { login, logout } = authSlice.actions; //是為了在外部可以使用函式
export default authSlice.reducer;