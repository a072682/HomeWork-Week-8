import { Outlet, useParams } from "react-router-dom";
import Order from "../components/common/OrderPage/Order";
import { login } from "../slice/authSlice";
import { loadUserData } from "../slice/userSlice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";



function OrderPage (){

  const { id_name } = useParams();
  console.log("取得的id:",id_name);

  const dispatch = useDispatch();//使用中央函式

  const userData = useSelector((state) => state.user.currentUserData);

  const[shoppingCartData,setShoppingCartData] = useState(null);
  
  const DataIn = {
      email:userData?.email,
      cartItem:shoppingCartData,
  }

  useEffect(() => {
      const email = localStorage.getItem('fakeEmail');
      console.log("取得的email",email);
      const isLoggedIn = localStorage.getItem('fakeLogin') === 'true';
      // const savedUserData = localStorage.getItem('currentUserData');

      if (isLoggedIn && email) {
        dispatch(login({ email })); // 還原登入狀態
        // dispatch(loadUserData({ email })); 
        // 還原 currentUserData
      }
      
  }, []);

  useEffect(()=>{
      console.log("OrderUserData:",userData);
  },[userData]);

    return(
        <>
          <Order userData={userData} id_name={id_name}/>

          <Outlet />
        </>
    )
}
export default OrderPage; 