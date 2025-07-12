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

    // const TopChoices = [
    //     {
    //         title:"小白也會！從零開始學習 Python 程式設計",
    //         img:"/image/course-4.png",
    //         user_img:"/image/user01.jpg",
    //         name:"Kelly Hsu",
    //         discount_state:true,
    //         discount:"限時 8 折 🔥",
    //         price:"2,480",
    //         origin_price:"3,200",
    //         NumberOfPeople:"420",
    //         score:"4.0",
    //         NumberOfPeople:"333",
    //     },
    //     {
    //         title:"全面掌握 JavaScript 開發技術",
    //         img:"/image/course-5.png",
    //         user_img:"/image/user02.jpg",
    //         name:"希姐帶你吃",
    //         discount_state:true,
    //         discount:"限時 8 折 🔥",
    //         price:"1,680",
    //         origin_price:"2,980",
    //         NumberOfPeople:"1,397 ",
    //         score:"4.0",
    //         NumberOfPeople:"333",
    //     },
    //     {
    //         title:"HTML & CSS 網頁設計基礎教程",
    //         img:"/image/course-6.png",
    //         user_img:"/image/user03.jpg",
    //         name:"K.Dee",
    //         discount_state:false,
    //         discount:"限時 8 折 🔥",
    //         price:"2,680",
    //         origin_price:"3,200",
    //         NumberOfPeople:"420",
    //         score:"4.0",
    //         NumberOfPeople:"333",
    //     },
    //     {
    //         title:"更進一步！深入學習 Node.js 與後端開發",
    //         img:"/image/course-7.png",
    //         user_img:"/image/user04.jpg",
    //         name:"Mikeeee",
    //         discount_state:false,
    //         discount:"限時 8 折 🔥",
    //         price:"1,980",
    //         origin_price:"3,200",
    //         NumberOfPeople:"290",
    //         score:"4.0",
    //         NumberOfPeople:"333",
    //     },
    // ]

    // const duplicatedTopChoices = [...TopChoices, ...TopChoices];
    // 重複兩次資料

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