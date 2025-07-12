import { createSlice } from '@reduxjs/toolkit';

const initialUsers = [
  {
    id:"adminuser",
    email: 'admin123@gmail.com',
    password: 'admin123',
    name: '管理員',
    collection:[],
    portfolio:[],
    shoppingCart: {
      totalPrice:null,
      classtotalNumber:null,
      items:[],
      billData:null,
      payData:null,
    },
    classes: {
      InClass:[],
      Waiting:[],
      finish:[],
    },
    order:[],
  },
];

const userSlice = createSlice({
  name: 'user',
  initialState: {
    users: initialUsers,
    currentUserData: null, // 登入後的使用者完整資料
  },
  reducers: {
        //驗證帳號密碼登入
        matchUser: (state, action) => {
            const { email, password } = action.payload;
            //解構結果 
            //email = 'andy@gmail.com'
            //password = 'andy123'
            const found = state.users.find(//判定方式
                (item) => item.email === email && item.password === password
            );

            if (found) {
                state.currentUserData = found; 
                localStorage.setItem('currentUserData', JSON.stringify(found));
                //物件不能直接寫進 localStorage（只能存字串）
                //JSON.stringify 轉為純字串
                //由字串轉物件方法
                //const stored = localStorage.getItem('currentUserData');
                //const user = JSON.parse(stored);
                //把一段「符合 JSON 格式的字串」轉回 JavaScript 的物件或陣列。
            } else {
                alert('帳號或密碼錯誤');
            }
        },
        //使用方式
        //dispatch(matchUser({ email, password }));
        //dispatch(login({ email }));             // 設定 auth 狀態為已登入
        //dispatch(loadUserData({ email }));      // 載入該使用者的個人資料


        // ✅ 根據 email 載入該使用者的資料（通常在刷新後重新初始化用）
        //資料刷新用
        loadUserData: (state, action) => {
          const { email } = action.payload;
          const savedUserData = JSON.parse(localStorage.getItem('currentUserData'));
          console.log("從currentUserData轉換的資料:",savedUserData);
          const user = state.users.find((u) => u.email === email);

          if (user) {
            console.log("找到user");
            state.currentUserData = savedUserData;
            state.currentUserData.shoppingCart.classtotalNumber = state.currentUserData.shoppingCart.items?.length;
          } else {
            console.log("沒找到user");
            return;
          }
        },

        // ✅ 根據 email 更新購物車資料
        updateCart: (state, action) => {
          const { email, cartItem } = action.payload;

          // 1️⃣ 從 localStorage 取出目前登入者資料
          const current = JSON.parse(localStorage.getItem('currentUserData'));
          if (!current) return;

          // 2️⃣ 將 currentUserData 設定回 state
          state.currentUserData = current;
          console.log("轉換回的資料:",current);

          // 3️⃣ 找出目標使用者
          const user = state.users.find((u) => u.email === email);
          if (!user) {
            console.log("沒找到user資料");
            return;
          };

          // 4️⃣ 檢查購物車是否存在，否則初始化
          if (!Array.isArray(user.shoppingCart.items)) {
            user.shoppingCart.items = [];
          }
          if (!Array.isArray(state.currentUserData.shoppingCart.items)) {
            state.currentUserData.shoppingCart.items = [];
          }

          // 🛡️ 防呆處理：避免 cartItem 為 null 或沒有 id
          if (!cartItem || !cartItem.id) return;

          // 5️⃣ 檢查是否已有該商品
          const product = state.currentUserData.shoppingCart.items?.find(
            (item) => item.id === cartItem.id
          );

          if (product) {
            console.log("商品存在");
            // 商品已存在 → 數量加總
            user.shoppingCart.items = [...state.currentUserData.shoppingCart.items]; 
            // 更新原始 user 資料

          } else {
            console.log("商品不存在推入，推入購物車");
            // 商品不存在 → 推入購物車
            state.currentUserData?.shoppingCart?.items?.push(cartItem);

            //更新classtotalNumber
            state.currentUserData.shoppingCart.classtotalNumber = state.currentUserData.shoppingCart.items.length;

            //更新totalPrice
            const priceItems = state.currentUserData.shoppingCart.items;
            const totalPriceData = priceItems.reduce((sum, item) => {
              return sum + Number(item.price) || 0;
            }, 0);
            state.currentUserData.shoppingCart.totalPrice = totalPriceData;

            // 更新原始 user 資料
            user.shoppingCart.items = [...state.currentUserData.shoppingCart.items]; 
          }

          // 6️⃣ 存回 localStorage
          console.log("要存回localStorage的資料:",state.currentUserData);
          localStorage.setItem('currentUserData',JSON.stringify(state.currentUserData));
        },



        // ✅ 清除購物車商品
        clearCart: (state, action) => {
            const { email, cartItem} = action.payload;

            // 1️⃣ 從 localStorage 取出目前登入者資料
            const current = JSON.parse(localStorage.getItem('currentUserData'));
            if (!current) return;

            // 2️⃣ 把它寫回 redux 的 state 中
            state.currentUserData = current;

            const user = state.users.find((u) => u.email === email);
            if (!user) return;

            // 🛡️ 防呆處理：避免 cartItem 為 null 或沒有 id
            if (!cartItem || !cartItem.id) return;

            // 5️⃣ 檢查是否已有該商品
            const product = state.currentUserData.shoppingCart.items?.find(
              (item) => item.id === cartItem.id
            );

            if(product){
              console.log("商品存在");
              product.quantity = product.quantity - 1;
              if (product.quantity <= 0) {
                // 數量歸零 → 直接從購物車移除
                state.currentUserData.shoppingCart.items = state.currentUserData.shoppingCart.items.filter(
                  (item) => item.id !== cartItem.id
                );
              }
              user.shoppingCart.items = [...state.currentUserData.shoppingCart.items]; // 更新原始 user 資料
              console.log("移除資料後的資料",state.currentUserData.shoppingCart.items);
            }

            // 6️⃣ 存回 localStorage
            localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));
        },

        //Order2連結函式
        goToOrder2:(state, action) => {
          const {email, cartItem} = action.payload;

          // ⬅️ 這是一個陣列
            const selectedIds = cartItem.id; 

          // 1️⃣ 從 localStorage 取出目前登入者資料
          const current = JSON.parse(localStorage.getItem('currentUserData'));
          if (!current) return;

          // 2️⃣ 把它寫回 redux 的 state 中
          state.currentUserData = current;

          //確認使用者
          const user = state.users.find((u) => u.email === email);
          if (!user) return;

          // 4️⃣ 更新購物車中符合 ID 的項目
          state.currentUserData.shoppingCart.items = state.currentUserData.shoppingCart.items.map((item) => {
            if (selectedIds.includes(item.id)) {
              return { ...item, paySelect: true };
            } else {
              return { ...item, paySelect: false };
            }
          });

          // 5️⃣ 同步回 user 的資料
          user.shoppingCart.items = [...state.currentUserData.shoppingCart.items];

          // 6️⃣ 更新 localStorage
          localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));
        },

        //發票資料上傳函式
        billDataUp:(state, action) =>{
          const {email,billData,} = action.payload;

          // 1️⃣ 從 localStorage 取出目前登入者資料
          const current = JSON.parse(localStorage.getItem('currentUserData'));
          if (!current) return;

          // 2️⃣ 把它寫回 redux 的 state 中
          state.currentUserData = current;

          //確認使用者
          const user = state.users.find((u) => u.email === email);
          if (!user) return;

          //更新發票資料
          state.currentUserData.shoppingCart.billData = billData

          // 5️⃣ 同步回 user 的資料
          user.shoppingCart.billData = {...state.currentUserData.shoppingCart.billData};

          // 6️⃣ 更新 localStorage
          localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));
        },

        //付款資料上傳函式
        payDataUp:(state, action) =>{
          const {email,payData,} = action.payload;

          // 1️⃣ 從 localStorage 取出目前登入者資料
          const current = JSON.parse(localStorage.getItem('currentUserData'));
          if (!current) return;

          // 2️⃣ 把它寫回 redux 的 state 中
          state.currentUserData = current;

          //確認使用者
          const user = state.users.find((u) => u.email === email);
          if (!user) return;

          //更新付款資料
          state.currentUserData.shoppingCart.payData = payData;

          // 5️⃣ 同步回 user 的資料
          user.shoppingCart.payData = {...state.currentUserData.shoppingCart.payData};

          // 6️⃣ 更新 localStorage
          localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));
        },

        //訂單資料轉移
        orderTransfer:(state, action) =>{
          const {email} = action.payload;

          // 1️⃣ 從 localStorage 取出目前登入者資料
          const current = JSON.parse(localStorage.getItem('currentUserData'));
          if (!current) return;

          // 2️⃣ 把它寫回 redux 的 state 中
          state.currentUserData = current;

          //確認使用者
          const user = state.users.find((u) => u.email === email);
          if (!user) return;

          // 4️⃣ 將購物車資料推入 order 陣列（確保不共用參照）
          const orderData = { ...state.currentUserData.shoppingCart };
          const classData = [...state.currentUserData.shoppingCart.items];

          // ✅ 推入 order 陣列（避免覆蓋）
          state.currentUserData.order = [...(state.currentUserData.order || []), orderData];
          user.order = [...(user.order || []), orderData];

          // ✅ 過濾掉重複的課程再推入 InClass
          const existingClasses = state.currentUserData.classes.InClass || [];

          const newClasses = classData.filter(
            (course) => !existingClasses.some((existing) => existing.id === course.id)
          );

          state.currentUserData.classes.InClass = [...existingClasses, ...newClasses];
          user.classes.InClass = [...(user.classes.InClass || []), ...newClasses];

          // 5️⃣ 清空購物車
          const emptyCart = {
            totalPrice: null,
            classtotalNumber: null,
            items: [],
            billData: null,
            payData: null,
          };
          state.currentUserData.shoppingCart = emptyCart;
          user.shoppingCart = emptyCart;

          // 6️⃣ 更新 localStorage
          localStorage.setItem('currentUserData', JSON.stringify(state.currentUserData));
        }

  },
});

export const { matchUser,loadUserData,updateCart,clearCart,goToOrder2,billDataUp,payDataUp,orderTransfer } = userSlice.actions; //是為了在外部可以使用函式
export default userSlice.reducer;