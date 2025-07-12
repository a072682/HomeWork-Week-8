import { useEffect, useState } from 'react';
import './_Order.scss';
import { clearCart, goToOrder2 } from '../../../slice/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleCartTotalPrice } from '../../../slice/dataSlice';

function Order({userData,id_name}) {

  const navigate = useNavigate();

  const dispatch = useDispatch();//使用中央函式

  const[shoppingCartData,setShoppingCartData] = useState(null);
  


  const handleshoppingCartData = (data)=>{
    setShoppingCartData(data);
    dispatch(clearCart(
      {email:userData?.email,
        cartItem:{
          id:data,
        },
      }));
  }

  const [isDetailOpen, setIsDetailOpen] = useState(false); // 控制明細展開
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); // ➤ 控制遮罩顯示

  useEffect(()=>{
      console.log("OrderUserData:",userData);
      console.log("物件更新:",shoppingCartData);
  },[userData,shoppingCartData]);

  const handleToggleDetail = () => {
      if (!isDetailOpen) {
          setIsDetailOpen(true);
          setIsBackdropVisible(true); // 顯示遮罩
      } else {
          setIsDetailOpen(false);
          setTimeout(() => setIsBackdropVisible(false), 400); // 延遲卸載遮罩
      }
  };

  const handleCloseDetail = () => {
      setIsDetailOpen(false);
      setTimeout(() => setIsBackdropVisible(false), 400); // 延遲卸載遮罩
  };


  //處理勾選狀態
    // 儲存每個商品是否被勾選
    const [selectedIds, setSelectedIds] = useState([]);

    // 判斷是否全選
    const isAllSelected = selectedIds.length === userData?.shoppingCart?.items?.length;

    // 切換全選
    const toggleSelectAll = () => {
        if (isAllSelected) {
            setSelectedIds([]);
        } else {
            setSelectedIds(userData?.shoppingCart?.items.map((item) => item.id));//所有商品的 id 取出來，放進一個陣列裡
        }
    };

    // 切換單一商品選取
    const toggleSelectOne = (id) => {
        setSelectedIds((prev) =>
          prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
          //這個 id 是否已經在 selectedIds 裡？
      );
    };
  //

  //
    //從 Redux 取出購物車資料
    const cartItems = userData?.shoppingCart?.items || [];

    //根據勾選的 ID，過濾出勾選的商品
    const selectedItems = cartItems.filter((item) => selectedIds.includes(item.id));

    //計算總金額與課程數量
    const selectedTotalPrice = selectedItems.reduce((sum, item) => sum + Number(item.price), 0);
    const selectedTotalCount = selectedItems.length;
  //

  //
    //跳往付款頁面

    const handleGoToOrder2 = () => {
      const payData = {
        email:userData?.email,
        cartItem:{
          id:selectedIds,
        },
      }
      dispatch(goToOrder2(payData));
      console.log("資料上傳:",payData) 
      navigate(`/OrderPage2/${id_name}`);
    };
  //

  return (
    <div className='Order'>
      {/* 背景遮罩 */}
      {isBackdropVisible && (
          <div
            className={`Order-backdrop ${isDetailOpen ? 'fade-in' : 'fade-out'}`}
            onClick={handleCloseDetail}
          ></div>
        )}

        <div className="container">
            <div className="row">
                <div className="col">
                    <div className='Order-box'>
                      <div className='StepProgressBar'>
                          <div className='Step01-container'>
                              <div className="Step01">1</div>
                              <p className='text'>確認訂單</p>
                          </div>
                          <div className='Step02-container'>
                              <div className="Step02">2</div>
                              <p className='d-none d-lg-block text'>付款確認</p>
                          </div>
                          <div className='Step03-container'>
                              <div className="Step03">3</div>
                              <p className='d-none d-lg-block text'>購買完成</p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col col-lg-8">
                              <div className={`shopping-cart ${userData?.shoppingCart?.items?.length === 0 ?("zero"):(null)}`}>
                                  {
                                    userData?.shoppingCart?.items?.length === 0 ?
                                    (
                                      <>
                                        <img src="/image/empty.png" alt="" />
                                        <p>購物車還沒有商品，立即逛逛！</p>
                                        <button onClick={()=>{navigate("/");}}
                                        >前往首頁</button>
                                      </>
                                    )
                                    :
                                    (
                                        <div className="form-check">
                                          {/* ✅ 全選按鈕 */}
                                          <div className="item-all">
                                            <input
                                              type="checkbox"
                                              className="form-check-input"
                                              id="selectAll"
                                              checked={isAllSelected}
                                              onChange={toggleSelectAll}
                                            />
                                            <label className="form-check-label" htmlFor="selectAll">
                                              全選
                                            </label>
                                          </div>

                                          {/* ✅ 商品列表 */}
                                          <div className="product-item-container d-none d-lg-block">
                                            {
                                              userData?.shoppingCart?.items?.map((product) => (
                                                <div className="product-item" key={product.id}>
                                                  <div className="input-box">
                                                    <input
                                                      type="checkbox"
                                                      className="product-input"
                                                      id={`product-${product.id}`}
                                                      checked={selectedIds.includes(product.id)}
                                                      onChange={() => toggleSelectOne(product.id)}
                                                    />
                                                  </div>
                                                  <div className="img-box">
                                                    <img src={product.img} alt="" />
                                                    <p>{product.title}</p>
                                                  </div>
                                                  <div className="price-box">
                                                    <p className="price-text">NT$ {product.price}</p>
                                                  </div>
                                                  <div className="btn-box">
                                                    <button type='button' className="product-btn">移至收藏</button>
                                                    <button type='button' className="product-btn" 
                                                    onClick={()=>{handleshoppingCartData(product.id)}}>刪除</button>
                                                    {/*  */}
                                                  </div>
                                                </div>
                                              ))
                                            }
                                          </div>

                                          <div className="product-item-mb-container d-block d-lg-none">
                                            {
                                              userData?.shoppingCart?.items?.map((product) => (
                                                <div className="product-mb-item" key={product.id}>
                                                  <input  type="checkbox" 
                                                          className="product-mb-input" 
                                                          id={`product-${product.id}`}
                                                          checked={selectedIds.includes(product.id)}
                                                          onChange={() => toggleSelectOne(product.id)}
                                                  />
                                                  <div className='product-box'>
                                                      <div className="img-box">
                                                        <img src={product.img} alt="" />
                                                        <p>{product.title}</p>
                                                      </div>
                                                      <div className="price-box">
                                                        <p className="price-text">NT$ {product.price}</p>
                                                      </div>
                                                      <div className="btn-box">
                                                        <button type='button' className="product-btn">移至收藏</button>
                                                        <button type='button' className="product-btn" 
                                                        onClick={()=>{handleshoppingCartData(product.id)}}>刪除</button>
                                                      </div>
                                                  </div>
                                                </div>
                                              ))
                                            }
                                              
                                          </div>
                                        </div>
                                    )
                                  }
                                  
                                  
                              </div>
                          </div>
                          <div className="d-none d-lg-block col-lg-4">
                              <div className='Checkout-dk'>
                                  
                                  <div className='detail-container'>
                                      <div className='dk-header'>
                                          <p>訂單明細</p>
                                      </div>
                                      <div className='detail'>
                                          <p className='detail-text'>{selectedTotalCount} 項課程小計</p>
                                          <p className='detail-price'>NT$ {selectedTotalPrice}</p>
                                      </div>    
                                      <div className='total'>
                                          <p className='total-text'>總計</p>
                                          <p className='total-price'>NT$ {selectedTotalPrice}</p>
                                      </div>
                                      <div className='btn_text'>
                                          <button typr="button" onClick={()=>{handleGoToOrder2();}}>前往結帳</button>
                                          <p className='caption-text'>確認購買即表示您已審閱 Learning 所提供之購物相關條款，並同意條款內容。</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>  
                </div>
            </div>
        </div>

      <div className='Checkout d-lg-none'>
          {/* 訂單明細區塊：條件渲染 + 動畫效果 */}
          <div className={`Order-detail-container ${isDetailOpen ? 'open' : ''}`}>
              <div className='header'>
                <p>訂單明細</p>
                <span className="material-symbols-outlined" onClick={handleCloseDetail}>
                  close
                </span>
              </div>
              <div className='detail-container'>
                <div className='detail'>
                  <p className='detail-text'>{selectedTotalCount} 項課程小計</p>
                  <p className='detail-price'>NT$ {selectedTotalPrice}</p>
                </div>
                <div className='total'>
                  <p className='total-text'>總計</p>
                  <p className='total-price'>NT$ {selectedTotalPrice}</p>
                </div>
                <div className='caption'>
                  <p className='caption-text'>確認購買即表示您已審閱 Learning 所提供之購物相關條款，並同意條款內容。</p>
                </div>
              </div>
          </div>

          {/* 操作按鈕區 */}
          <div className='Order-container'>
            <div className='text'>
              <div className='btn01'>
                <button onClick={handleToggleDetail}>
                  {isDetailOpen ? '收合明細' : '展開明細'}
                  <span className={`material-symbols-outlined down-icon ${isDetailOpen ? 'rotate' : ''}`}>
                    keyboard_arrow_down
                  </span>
                </button>
              </div>
              <p className='price'>NT$ {selectedTotalPrice}</p>
            </div>
            <div className='btn02'>
              <button typr="button" onClick={()=>{handleGoToOrder2();}}>前往結帳</button>
            </div>
          </div>
      </div>
    </div>
  );
}

export default Order;
