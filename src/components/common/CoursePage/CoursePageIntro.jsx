import { Link } from 'react-router-dom';
import './_CoursePageIntro.scss';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { CoursePageIntroTabDataUp } from '../../../slice/dataSlice';



function CoursePageIntro ({coursePageAllData,coursePageTitleData,id_first}){


    const[tab,setTab] = useState("所有課程");

    const dispatch = useDispatch();//使用中央函式

    const handleCoursePageIntroTab = (tab)=>{
        setTab(tab);
        dispatch(CoursePageIntroTabDataUp(tab));
        console.log("資料選擇:",tab);
    }

    const tablist = [
        "所有課程",...coursePageAllData,
    ]

    const w_tablist = [...tablist,...tablist];

    useEffect(()=>{
        console.log("取得CoursePage中央資料",coursePageAllData,coursePageTitleData,id_first);
    },[coursePageAllData,coursePageTitleData,id_first]);


    return(
        <>
            <div className='CoursePageIntro my-40'>
                <img className='mb-img01' src="/image/deco/flower-2.png" alt="" />
                <img className='mb-img02' src="/image/deco/polygon-2.png" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <ol className="breadcrumb CoursePage-breadcrumb">
                                <li className="breadcrumb-item CoursePage-breadcrumb-item">
                                    <Link className='link01' to="/">所有課程</Link>
                                </li>
                                <li className="breadcrumb-item CoursePage-breadcrumb-item active">
                                    <Link className='link02' to={`/CoursePage/${id_first}`}>{coursePageTitleData?.[0]?.label}課程</Link>
                                </li>
                            </ol>
                            <div className='Intro-title'>
                                <h3>{coursePageTitleData?.[0]?.label}課程</h3>
                            </div>
                            <div className='Intro-item'>
                                <Swiper
                                    className='h-100'
                                    modules={[Navigation]}
                                    slidesPerView="auto"
                                    loop={true}
                                    spaceBetween={8}
                                    navigation={{ nextEl: ".Intro-next" }}
                                    >
                                    {(tablist.length <= 12?(tablist):(w_tablist)).map((item, index) => {
                                        const label = typeof item === "string" ? item : item.label;

                                        return (
                                            <SwiperSlide key={index} style={{ width: 'fit-content' }}>
                                                <button
                                                    onClick={() => handleCoursePageIntroTab(label)}
                                                    className={`Intro-btn ${tab === label ? "active" : ""}`}
                                                >
                                                    {label}
                                                </button>
                                            </SwiperSlide>
                                        );
                                    })}
                                </Swiper>
                                
                                <div className="Intro-next d-lg-flex justify-content-lg-center align-items-lg-center pointer">
                                    <span className="material-symbols-outlined">
                                        arrow_forward_ios
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CoursePageIntro; 