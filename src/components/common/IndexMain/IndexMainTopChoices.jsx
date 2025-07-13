import './_IndexMainTopChoices.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import { Fragment, useEffect, useState } from 'react';
import Card04 from '../card/Card04';
import { useNavigate } from 'react-router-dom';
import { getTopProgressItems, handleGoToClassPage } from '../../../slice/dataSlice';


function IndexMainTopChoices ({allData}){

    const navigate = useNavigate();//頁面跳轉宣告

    const [topChoicesData, setTopChoicesData] = useState([]);
    
    useEffect(()=>{
        const result = getTopProgressItems(allData,4);
        setTopChoicesData(result);
        console.log("TopChoices的矩陣:", result);
    },[allData])

    const w_topChoicesData = [...topChoicesData,...topChoicesData];

    return(
        <>
            {/* <div className='IndexMainTopChoices-mb position-relative py-80 py-lg-120'> */}
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='IndexMainTopChoices-mb position-relative py-80 py-lg-120'>
                                <img className="position-absolute IndexMainTopChoices-mb-deco" src="/image/deco/flower-1.png" alt="" />
                                <div className='IndexMainTopChoices-content '>
                                    <div className='IndexMainTopChoices-title'>
                                        <h2 className='d-block d-lg-none'>看看大家</h2> 
                                        <h2 className='d-block d-lg-none'>都買了什麼</h2>
                                        <h2 className='d-none d-lg-block'>看看大家都買了什麼</h2> 
                                        <p>熱銷課程一次看！✨</p>
                                    </div>
                                    <div className='IndexMainTopChoices-cardgroups position-relative py-24'>
                                        <Swiper
                                            className='h-100'
                                            modules={[EffectCoverflow,Navigation]}
                                            slidesPerView={1}
                                            loop={true}
                                            spaceBetween={8}
                                            navigation={{
                                                nextEl: '.swiper-button02-next',
                                                prevEl: '.swiper-button02-prev',
                                            }}
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
                                            {w_topChoicesData.map((item,index) => (
                                                <SwiperSlide key={index}>
                                                    <button type="button" className='border-0 p-0' onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                        <Card04 item={item} />
                                                    </button>   
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div className='TopChoices-card-btn'>
                                            <button className="swiper-button02-prev d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                                                <span class="material-symbols-outlined">
                                                    arrow_back
                                                </span>
                                            </button>
                                            <button className="swiper-button02-next d-none border-0 p-0 d-lg-flex justify-content-center align-items-center">
                                                <span class="material-symbols-outlined">
                                                    arrow_forward
                                                </span>
                                            </button >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default IndexMainTopChoices; 