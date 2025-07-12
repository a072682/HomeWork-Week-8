
import './_Order03.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card04 from '../card/Card04';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { orderTransfer } from '../../../slice/userSlice';
import { getTopProgressItems, handleGoToClassPage } from '../../../slice/dataSlice';



function Order03() {

    const navigate = useNavigate();

    const hasTransferred = useRef(false); // ⚠️ 預設 false

    const allData = useSelector((state) => state.data.defaultClassData);
    
    const { id_name } = useParams();
    console.log("取得的id:(O3)",id_name);

    const dispatch = useDispatch();//使用中央函式

    const userData = useSelector((state) => state.user.currentUserData);

    const [o3TopChoicesData, setO3TopChoicesData] = useState([]);

    useEffect(()=>{
        console.log("Order3Data:",userData);
        const result = getTopProgressItems(allData,6);
        if (!hasTransferred.current && userData?.shoppingCart?.payData !== null){
            hasTransferred.current = true;
            dispatch(orderTransfer({email:userData?.email}));
            console.log("資料已進行轉換");
        }
        setO3TopChoicesData(result);
    },[userData,allData]);

  return (
    <div className='Order03'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="Order03-bg">
                        <div className='Order03-intro'>
                            <div className='hrader-container'>
                                <div className='icon-container'>
                                    <span class="material-symbols-outlined check-icon">
                                        check
                                    </span>
                                </div>
                                <div className='text-container'>
                                    <p>恭喜，Jessica！</p>
                                    <p>您已購買完成</p>
                                </div>
                            </div>
                            <p className='intro-text'>感謝您在 Learning 購買了課程，我們已將訂單相關資訊發送至您的電子信箱。</p>
                            <div className='Order03-btn-container'>
                                <button className='Order03-btn01' type='button' onClick={()=>{navigate(`/`)}}>
                                    立即前往上課
                                </button>
                                <button className='Order03-btn02' type='button' onClick={()=>{navigate(`/ProfilePage/${id_name}`)}}>
                                    查看訂單記錄
                                </button>
                            </div>
                        </div>
                        <div className='Order03-class'>
                            <div className='Order03-title-box'>
                                <img className='title-img' src="/image/deco/flower-5.png" alt="" />
                                <p className='Order03-title-text'>更多熱門課程</p>
                            </div> 
                            <div className='content-container'>
                                <Swiper
                                    className=''
                                    modules={[]}
                                    slidesPerView={1}
                                    loop={true}
                                    spaceBetween={8}
                                        
                                    breakpoints={{
                                        768: {
                                        spaceBetween: 8,
                                        slidesPerView: 2,
                                        },
                                        992: {
                                        spaceBetween: 16,
                                        slidesPerView: 3,
                                        },
                                        1200: {
                                        spaceBetween: 24,
                                        slidesPerView: 4,
                                        },
                                    }}
                                    >
                                    {o3TopChoicesData.map((item,index) => (
                                        <SwiperSlide key={index}>
                                            <button type="button" className='border-0 p-0' onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                <Card04 item={item} />
                                            </button>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Order03;
