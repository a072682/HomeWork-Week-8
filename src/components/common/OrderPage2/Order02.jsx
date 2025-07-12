import { useEffect, useState } from 'react';
import './_Order02.scss';
import { Collapse, Dropdown } from 'react-bootstrap';
import WaitingModal from '../WaitingModal/WaitingModal';
import { useDispatch, useSelector } from "react-redux";
import { billDataUp, payDataUp } from '../../../slice/userSlice';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


function Order02() {

    const { id_name } = useParams();
    // console.log("取得的id:(O2)",id_name);

    const dispatch = useDispatch();//使用中央函式

    const userData = useSelector((state) => state.user.currentUserData);

    useEffect(()=>{
            console.log("Order2Data:",userData);
        },[userData]);

    const orderPage2Data = userData?.shoppingCart?.items?.filter((item) => item.paySelect === true);
    // console.log("過濾後資料:",orderPage2Data);


    //計算總金額與課程數量
    const orderPage2TotalPrice = orderPage2Data?.reduce((sum, item) => sum + Number(item.price), 0);
    const orderPage2TotalCount = orderPage2Data?.length;

    
 
    //付款部分
        //控制input卡片資料顯示內容
        const [cardForm, setCardForm] = useState({
            cardNumber: '',
            expirationDate: '',
            cvv: '',
        });

        //付款方式用矩陣
        const payType = [
            {
                itemId:"creditCard",
                title:"信用卡一次付清",
                value:"creditCard",
                icon:[
                    "/image/icons/Type=VISA.png",
                    "/image/icons/Type=Mastercard.png",
                    "/image/icons/Type=JCB.png",
                ],
            },
            {
                itemId:"creditCard-installment",
                title:"信用卡分期",
                value:"creditCard-installment",
                icon:[
                    "/image/icons/Type=VISA.png",
                    "/image/icons/Type=Mastercard.png",
                    "/image/icons/Type=JCB.png",
                ],
            },
            {
                itemId:"line-pay",
                title:"LINE Pay",
                value:"LinePay",
                icon:[
                    "/image/icons/LINE-Pay(h)_W238_n 2.png",
                ],
            },
            {
                itemId:"JKOPay",
                title:"街口支付",
                value:"JKOPay",
                icon:[
                    "/image/icons/image 31.png",
                ],
            },
            {
                itemId:"ATM-Pay",
                title:"ATM 轉帳",
                value:"ATM-Pay",
            },
            {
                itemId:"Market-Pay",
                title:"超商付款",
                value:"Market-Pay",
            },
        ]
        //信用卡資料
        const handleCreditCardSubmit = () => {
            const payData = {
                method: selectedPayment,
                cardData: cardForm, // ✅ 這裡用最新的資料
            };
            console.log("付款資料上傳:",payData);
            dispatch(payDataUp({
                email:userData?.email,
                payData:payData,
            }));
        };

        //付款方式狀態
        const [selectedPayment, setSelectedPayment] = useState("");
        // 2️⃣ 處理選擇付款方式的變化
        const handlePaymentChange = (event) => {
            console.log("選擇的付款方式:",event.target.value);
            setSelectedPayment(event.target.value);
        };
    //

    //發票部分
        //儲存發票類型
        const[billType, setBillType] = useState("電子發票");
        const [billshow, setBillShow] = useState(false); // 控制 dropdown 是否展開

        const handleBillSelect = (type) => {
            setBillType(type);  // 設定選擇的發票類型
            setBillForm({ ...billForm, billType: type });
            setBillShow(false);     // 關閉 Dropdown menu
        };

        //儲存發票類型
        const[pickupType, setPickupType] = useState("存在 Learning 中，中獎寄信通知");
        const [pickupshow, setPickupShow] = useState(false); // 控制 dropdown 是否展開

        const handlePickupSelect = (type) => {
            setPickupType(type);  // 設定選擇的發票類型
            setBillForm({ ...billForm, pickupType: type })
            setPickupShow(false);     // 關閉 Dropdown menu
        };

        //控制發票選像顯示內容
        const [billForm, setBillForm] = useState({
            name:"",
            billType:billType,
            email:"",
            pickupType:pickupType,
        });

        //發票資料
        const handleBillDataSubmit = () => {
            console.log("發票資料上傳:",billForm);
            dispatch(billDataUp({
                email:userData?.email,
                billData:billForm,
            }));
        }
    //

    //資料上傳
        const handleDataUp = ()=>{
            handleCreditCardSubmit()
            handleBillDataSubmit();
        }


    //控制Modal
    const [open, setOpen] = useState(false);
    // ⌨️ 按下 Esc 鍵關閉 modal
    useEffect(() => {
        const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            setOpen(false);
        }
        };

        if (open) {
        window.addEventListener('keydown', handleKeyDown);
        }

        return () => {
        window.removeEventListener('keydown', handleKeyDown);
        };
    }, [open]);
    //


  return (
    <div className='Order02'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className='Order02-box'>
                      <div className='StepProgressBar'>
                          <div className='Step01-container'>
                              <div className="Step01 active">1</div>
                              <p className='d-none d-lg-block text'>確認訂單</p>
                          </div>
                          <div className='Step02-container'>
                              <div className="Step02 active">2</div>
                              <p className='text'>付款確認</p>
                          </div>
                          <div className='Step03-container'>
                              <div className="Step03">3</div>
                              <p className='d-none d-lg-block text'>購買完成</p>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col col-lg-8">
                                <div className='order-item-container'>
                                    <div className='item-header'>
                                        <p className='item-caption'>商品明細</p>
                                        <p className='item-text'>共 {orderPage2TotalCount} 項課程</p>
                                    </div>
                                    {
                                        orderPage2Data?.map((item,index)=>{
                                            return(
                                                <div className='order-item' key={item.id}>
                                                    <div className='order-num'>{index + 1}</div>
                                                    <div className='order-text'>
                                                        <p>{item.title}</p>
                                                    </div>
                                                    <div className='order-price'>NT$ {item.price}</div>
                                                </div>
                                            )
                                            
                                        })
                                    }
                                </div>

                                <div className='pay-container'>
                                    <div className='pay-header'>付款方式</div>
                                    {
                                        payType?.map((item)=>{
                                            return(
                                                <div key={item.title} className='pay-item'>
                                                    <div className='pay-item-header'>
                                                        <div className="custom-radio-wrapper">
                                                            <input  type="radio" 
                                                                    id={item.itemId} 
                                                                    name="payment" 
                                                                    className="pay-input"
                                                                    value={item.value}
                                                                    checked={selectedPayment === item.value} 
                                                                    onChange={handlePaymentChange} />
                                                            <label htmlFor={item.itemId} className="custom-label">
                                                                {item.title}
                                                            </label>
                                                        </div>
                                                        <div className='pay-header-icon'>
                                                            {
                                                                item.icon &&
                                                                    item.icon?.map((iconItem)=>{
                                                                        return(
                                                                            <img key={iconItem} className='header-icon' src={iconItem} alt="" />
                                                                        )
                                                                    })
                                                            }
                                                        </div>
                                                    </div>
                                                    {
                                                        ['creditCard', 'creditCard-installment'].includes(item.value) && selectedPayment === item.value &&(
                                                            <Collapse in={selectedPayment === item.value}>
                                                                <div style={{ overflow: 'hidden', transition: 'height 0.4s ease' }}>
                                                                    <div className='pay-content'>
                                                                        <div className='content-box01'>
                                                                            <label className='cardnumberlabel' htmlFor="CardNumber">信用卡卡號<span className='red'>*</span></label>
                                                                            <input  className='cardnumberinput' 
                                                                                    type="password" 
                                                                                    id="CardNumber" 
                                                                                    value={cardForm.cardNumber}
                                                                                    onChange={(e) => setCardForm({ ...cardForm, cardNumber: e.target.value })}
                                                                                    />
                                                                        </div>
                                                                        <div className='content-container'>
                                                                            <div className='content-box02'>
                                                                                <label className='cardtimelabel' htmlFor="cardtime">信用卡有限期限<span className='red'>*</span></label>
                                                                                <input  className='cardtimelnput' 
                                                                                        type="text" 
                                                                                        id="cardtime"
                                                                                        value={cardForm.expirationDate}
                                                                                        onChange={(e) => setCardForm({ ...cardForm, expirationDate: e.target.value })}
                                                                                        />
                                                                            </div>
                                                                            <div className='content-box03'>
                                                                                <label className='cardkeylabel' htmlFor="cardkey">卡片背面後三碼<span className='red'>*</span></label>
                                                                                <input  className='cardkeylnput' 
                                                                                        type="number" 
                                                                                        id="cardkey"
                                                                                        value={cardForm.cvv}
                                                                                        onChange={(e) => setCardForm({ ...cardForm, cvv: e.target.value })}
                                                                                        />
                                                                            </div>
                                                                        </div>
                                                                        <p className='pay-text'>本公司採用喬睿科技 TapPay 金流交易系統，消費者刷卡時直接在銀行端系統中交易，本公司不會留下您的信用卡資料，以保障你的權益，資料傳輸過程採用嚴密的 SSL 2048bit 加密技術保護。</p>
                                                                    </div>
                                                                </div>
                                                            </Collapse>
                                                        )
                                                    }  
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                <div className='bill-container'>
                                    <div className='bill-header'>
                                        <div className='header-title'>發票選項</div>
                                    </div>
                                    <button className='bill-btn' onClick={()=>{handleBillData()}}>
                                        帶入上次結帳資料
                                    </button>
                                    <div className="bill-form-row">
                                        <div className='bill-input-container'>
                                            <label className='name-label' htmlFor="bill-name">姓名<span className='red'>*</span></label>
                                            <input  className='name-input' 
                                                    type="text" 
                                                    id="bill-name"
                                                    value={billForm.name}
                                                    onChange={(e) => setBillForm({ ...billForm, name: e.target.value })}
                                                    />
                                        </div>
                                        <div className='bill-input-container'>
                                            <label className='email-label' htmlFor="bill-email">聯絡用電子信箱<span className='red'>*</span></label>
                                            <input  className='email-input' 
                                                    type="email" 
                                                    id="bill-email"
                                                    value={billForm.email}
                                                    onChange={(e) => setBillForm({ ...billForm, email: e.target.value })}
                                                    />
                                        </div>
                                        <div className='bill-input-container'>
                                            <Dropdown show={billshow} onToggle={(isOpen) => setBillShow(isOpen)}>
                                                <div className='title-dropdown'>發票類型<span className='red'>*</span></div>
                                                <Dropdown.Toggle as="div" onClick={() => setBillShow(!billshow)}>
                                                    <button className='bill-Toggle'>
                                                        {billType}
                                                        <span class="material-symbols-outlined">
                                                            keyboard_arrow_down
                                                        </span>    
                                                    </button>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <button onClick={() => handleBillSelect("電子發票")} className='bill-content-dropdown'>電子發票</button>
                                                    <button onClick={() => handleBillSelect("二聯式發票")} className='bill-content-dropdown'>二聯式發票</button>
                                                    <button onClick={() => handleBillSelect("三聯式發票")} className='bill-content-dropdown'>三聯式發票</button>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            <div className='bill-tip'>
                                                <img src="/image/deco/flower-5.png" alt="" />
                                                <p className='tip-text'>如需開立統編，請選擇統編發票</p>
                                            </div>
                                        </div>
                                        <div className='pickup-input-container'>
                                            <Dropdown show={pickupshow} onToggle={(isOpen) => setPickupShow(isOpen)}>
                                                <div className='title-dropdown'>領取方式<span className='red'>*</span></div>
                                                <Dropdown.Toggle as="div" onClick={() => setPickupShow(!pickupshow)}>
                                                    <button className='pickup-Toggle'>
                                                        <span className="pickup-text">{pickupType}</span>
                                                        <span class="material-symbols-outlined">
                                                            keyboard_arrow_down
                                                        </span>    
                                                    </button>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <button onClick={() => handlePickupSelect("存在 Learning 中，中獎寄信通知")} className='pickup-content-dropdown'>存在 Learning 中，中獎寄信通知</button>
                                                    <button onClick={() => handlePickupSelect("寄送至學員 Email 信箱")} className='pickup-content-dropdown'>寄送至學員 Email 信箱</button>
                                                    <button onClick={() => handlePickupSelect("現場領取（需出示證明）")} className='pickup-content-dropdown'>現場領取（需出示證明）</button>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                
                          </div>
                          <div className="d-none d-lg-block col-lg-4">
                              <div className='Checkout-dk'>
                                  <div className='detail-container'>
                                      <div className='dk-header'>
                                          <p>訂單明細</p>
                                      </div>
                                      <div className='detail'>
                                          <p className='detail-text'>{orderPage2TotalCount} 項課程小計</p>
                                          <p className='detail-price'>NT$ {orderPage2TotalPrice}</p>
                                      </div>    
                                      <div className='total'>
                                          <p className='total-text'>總計</p>
                                          <p className='total-price'>NT$ {orderPage2TotalPrice}</p>
                                      </div>
                                      <div className='btn_text'>
                                          <button onClick={() => {setOpen(true);handleDataUp();}}>同意並付款 </button>
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

          {/* 操作按鈕區 */}
          <div className='Order-container'>
            <div className='text'>
              <div className='btn01'>
                <button>
                  展開明細
                </button>
                <span className="material-symbols-outlined down-icon">
                  keyboard_arrow_down
                </span>
              </div>
              <p className='price'>NT$ 0</p>
            </div>
            <div className='btn02'>
              <button onClick={() => setOpen(true)}>同意並付款</button>
            </div>
          </div>
      </div>
      <WaitingModal open={open} setOpen={setOpen} id_name={id_name}/>
    </div>
  );
}

export default Order02;
