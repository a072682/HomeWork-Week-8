import { configureStore } from "@reduxjs/toolkit";
import  countReducer  from "./slice/countSlice"; //引入後todoSlice.reducer需改成todoReducer
import authReducer from './slice/authSlice';
import dataReducer from './slice/dataSlice';
import userReducer from './slice/userSlice';

export const store = configureStore({
    reducer: { // 必要加入 reducer
        count: countReducer, // todo 是todoSlice.reducer的名稱而todoReducer名稱需要相同
        auth: authReducer,
        data: dataReducer,
        user: userReducer,
      }
});
export default configureStore;

