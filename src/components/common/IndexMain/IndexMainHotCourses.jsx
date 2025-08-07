import './_IndexMainHotCourses.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import { Fragment, useEffect, useState } from 'react';
import Card01 from '../card/Card01';
import { getTopProgressItems, handleGoToCoursePage } from '../../../slice/dataSlice';
import { useNavigate } from 'react-router-dom';


function IndexMainHotCourses ({allData}){

    const navigate = useNavigate();//頁面跳轉宣告

    const[tab, setTab] = useState(null);

    const [hotCoursesData, setHotCoursesData] = useState([]);

    useEffect(()=>{
        const result = getTopProgressItems(allData,4);
        setHotCoursesData(result);
        console.log("HotCourses的矩陣:", result);
    },[])

    const w_hotCoursesData = [...hotCoursesData, ...hotCoursesData];

    const handleTabSelect = (id)=>{
        setTab(id);
        console.log("tab取得的id:",id);
    }


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className='IndexMainHotCourses-mb position-relative d-block d-lg-none'>
                            <img className="position-absolute IndexMainHotCourses-mb-deco" src={`${import.meta.env.BASE_URL}image/deco/flower-2.png`} alt="" />
                            <div className='IndexMainHotCourses-content py-80'>
                                <h2>火熱募資課程</h2> 
                                <p>現在購買最優惠✨</p>
                                <div className='IndexMainHotCourses-tab pt-24'>
                                    <Swiper
                                        className='h-100'
                                        modules={[EffectCoverflow]}
                                        slidesPerView="auto"
                                        loop={true}
                                        spaceBetween={8}
                                        >
                                        {w_hotCoursesData.map((item,index) => (
                                            <SwiperSlide key={index} style={{ width: 'fit-content' }}>
                                                <button onClick={()=>{handleTabSelect(item.id)}} 
                                                        className={`HotCourses-tab-item ${tab === item.id ?("active"):("")} px-16 py-12 fw-400 fs-16 lh-15 poppins border-0`}>
                                                   {item.cardData.category}
                                                </button>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className='IndexMainHotCourses-cardgroups pt-24'>
                                    <Swiper
                                        className='h-100 pb-32 mb-24'
                                        modules={[EffectCoverflow, Pagination]}
                                        slidesPerView={1}
                                        loop={true}
                                        spaceBetween={8}
                                        pagination={{
                                            clickable: true,
                                            el: '.HotCourses-pagination',
                                        }}
                                        breakpoints={{
                                            992: {
                                            spaceBetween: 40,
                                            slidesPerView: 1.2,
                                            pagination: false,
                                            }
                                        }}
                                        >
                                        {hotCoursesData.map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <Card01 item={item}/>
                                            </SwiperSlide>
                                        ))}
                                        <div className="HotCourses-pagination"></div>
                                    </Swiper>
                                </div>
                                <div>
                                    <button className='HotCourses-btn w-100 py-16 fw-600 fs-16 lh-15 col-ffffff bg-0068FF poppins border-0 text-center'
                                            onClick={()=>{handleGoToCoursePage(allData,tab,navigate);}}>
                                        更多募資課程
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='IndexMainHotCourses-dk my-120 d-none d-lg-block position-relative'>
                            <img className="position-absolute IndexMainHotCourses-dk-deco" src={`${import.meta.env.BASE_URL}image/deco/flower-2.png`} alt="" />
                            <div className="row">
                                <div className="col-4">
                                    <div className="HotCourses-dk-text d-flex flex-column gap-40 mt-160">
                                        <div className='HotCourses-dk-title'>
                                            <h5 className='fw-600 fs-48 poppins'>火熱募資課程</h5>
                                            <p className='fw-400 fs-16 lh-15 col-4B4B4B poppins'>現在購買最優惠✨</p>
                                        </div>
                                        <div className='HotCourses-dk-item d-flex flex-wrap gap-8'>
                                            {
                                                hotCoursesData.map((item,index)=>{
                                                    return(
                                                        <Fragment key={index}>
                                                            <button onClick={()=>{handleTabSelect(item.id)}} 
                                                            className={`px-16 py-12 fw-400 fs-16 lh-15 poppins border-0 ${tab === item.id ?("active"):("")}`}>
                                                                {item.cardData.category}
                                                            </button>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                        <button className='HotCourses-dk-btn py-16 px-32 fw-600 fs-16 lh-15 col-ffffff bg-0068FF poppins border-0'
                                        onClick={()=>{handleGoToCoursePage(allData,tab,navigate);}}>
                                            更多募資課程
                                        </button>
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="row row-gap-24">
                                        {
                                            hotCoursesData.map((item, index)=>{
                                                return(
                                                    <Fragment key={index}>
                                                        <div className="col-6">
                                                            <Card01 item={item}/>
                                                        </div>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default IndexMainHotCourses; 