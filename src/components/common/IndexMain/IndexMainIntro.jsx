import './_IndexMainIntro.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { getTopProgressItems, handleGoToClassPage } from '../../../slice/dataSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




function IndexMainIntro ({allData}){

    const navigate = useNavigate();

    const[idData,setIdData] = useState(null);
    
    const [top5CardData, setTop5CardData] = useState([]);

    useEffect(() => {
    const result = getTopProgressItems(allData,5);
        setTop5CardData(result); // ✅ 使用 setState
        console.log("整理過後的矩陣:", result);
    }, [allData]);

    


    return(
        <>
            <div className='IndexMainIntro'>
                <div className='IndexMainIntro-content pb-lg-72'>
                    <Swiper
                        className='h-100'
                        modules={[EffectCoverflow, Navigation, Pagination]}
                        slidesPerView={1}
                        centeredSlides={true}
                        loop={true}
                        spaceBetween={8}
                        pagination={{
                            clickable: true,
                            el: '.swiper-pagination',
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        breakpoints={{
                            992: {
                            spaceBetween: 40,
                            slidesPerView: 1.2,
                            pagination: false,
                            }
                        }}
                        >
                        {top5CardData.map((item,num) => (
                            <SwiperSlide key={num}>
                                <div className='w-100 h-100'>
                                    <div className="slide-item px-16 px-lg-0 d-flex flex-lg-column">
                                    
                                        <img className="slide-item-in" src={item.cardData?.bigImg} alt="" />
                                        <img className="slide-item-in-icon d-none d-lg-block" src="/image/deco/flower-4.png" alt="" />
                                        
                                        <button className="slide-item-in2 mt-auto mb-48 ms-lg-40 mb-lg-32 border-0 p-8 p-lg-16 br-40 d-flex justify-content-center align-items-center gap-lg-8">
                                            <div className='slide-item-in2-btn px-12 py-8 br-40 gap-4 d-flex justify-content-center align-items-center
                                                            fw-600 fs-14 lh-15 col-0068FF poppins'>
                                                熱銷課程
                                                <img className='slide-item-in2-icon' src="/image/icons/ic_fire.png" alt="" />
                                            </div>
                                            <p className=   'slide-item-in2-text fw-600 col-000000 poppins text-start'>
                                                {item.title}
                                            </p>
                                        </button>
                                        <button type="button" onClick={() => handleGoToClassPage(allData,item.id,navigate)} className="slide-item-in3 d-none d-lg-block border-0 py-32 br-40 d-flex justify-content-center align-items-center">
                                            <div className='slide-item-in3-text mx-auto fw-600 fs-40 lh-12 col-ffffff poppins
                                                            d-flex justify-content-center al ign-items-center'>
                                                探索感興趣的課程，今天立即上課
                                                <span class="material-symbols-outlined fs-44 ms-16">
                                                    arrow_forward
                                                </span> 
                                            </div>
                                        </button>
                                        
                                    </div>
                                    <button className="IndexMainIntro-text px-16 mx-auto d-flex justify-content-center align-items-center d-lg-none border-0"
                                            onClick={() => handleGoToClassPage(allData,item.id,navigate)}>
                                        <p className='fw-600 fs-14 lh-12 col-ffffff poppins d-flex justify-content-center align-items-center gap-16'>探索感興趣的課程，今天立即上課
                                            <span className="material-symbols-outlined IndexMainIntro-icon col-ffffff">
                                                arrow_forward
                                            </span>
                                        </p>
                                    </button>
                                </div>
                            </SwiperSlide>
                        ))}
                            <div className="swiper-pagination"></div>
                            <button className="swiper-button-prev d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                                <span class="material-symbols-outlined">
                                    arrow_back
                                </span>
                            </button>
                            <button className="swiper-button-next d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                                <span class="material-symbols-outlined">
                                    arrow_forward
                                </span>
                            </button >
                        </Swiper>
                </div>
                
                
            </div>
        </>
    )
}
export default IndexMainIntro; 