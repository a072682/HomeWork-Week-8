import './_IndexMainList.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import { Fragment, useEffect, useState } from 'react';
import { handleGoToCoursePage02 } from '../../../slice/dataSlice';
import { useNavigate } from 'react-router-dom';


function IndexMainList ({allData}){

    const navigate = useNavigate();

    const [mainListData, setMainListData] = useState([]);

    useEffect(() => {
        const result_mb = getStructuredData(allData);
        setMainListData(result_mb); // ✅ 使用 setState
        console.log("MainList的矩陣:", result_mb);
    }, [allData]);


    const getStructuredData = (input) => {
        return input.map(section => {
            // 根據第一層 label 設定 icon
            let icon = "defaultIcon";
            let bg = "defaultbg";
            if (section.label === "程式") {icon = "bugDroid"; bg = "bg-FF994F";}
            else if (section.label === "音樂") {icon = "headphones"; bg = "bg-CF93FF";}

            return {
                ...section,
                icon,
                bg,
                num: (section.children || []).length
            };
        });
    };
    

    return(
        <>
            <div className="container d-block d-lg-none">
                <div className="row">
                    <div className="col">
                        <div className='IndexMainList-mb py-40 py-lg-120'>
                            <div className="IndexMainList-mb-title">
                                <img className="IndexMainList-mb-deco" src="/image/deco/polygon-1.png" alt="" />
                                <h2 className='d-block d-lg-none'>想學什麼嗎？</h2>
                                <h2 className='d-block d-lg-none'>一探究竟。</h2> 
                                <img className="IndexMainList-mb-deco2" src="/image/deco/line-2.png" alt="" />
                            </div>
                            <div className='IndexMainList-content mt-40'>
                                <Swiper
                                    className='h-100'
                                    modules={[EffectCoverflow]}
                                    slidesPerView={1}
                                    loop={true}
                                    spaceBetween={8}
                                    breakpoints={{
                                        768: {
                                        slidesPerView: 2,
                                        }
                                    }}
                                    >
                                    <SwiperSlide>
                                        <div className="MainList-card-box">
                                        {
                                            mainListData.slice(0, 2).map((group) => {
                                                return(
                                                    <button key={group.id} className="MainList-card border-0" onClick={()=>{handleGoToCoursePage02(allData,group.id,navigate)}}>
                                                        <div className={`MainList-card-img-box ${group.bg}`}>
                                                            <img
                                                            className="MainList-card-img"
                                                            src={`/image/icons/${group.icon}.png`}
                                                            alt=""
                                                            />
                                                        </div>
                                                        <div className="MainList-card-text">
                                                            <h6>{group.label}</h6>
                                                            <p>{group.num} 門課程</p>
                                                        </div>
                                                    </button>     
                                                )
                                            })
                                        }
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className='IndexMainList-dk d-none d-lg-block py-120'>
                <div className='IndexMainList-dk-bg'>
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <div className="row">
                                    <div className="col-12">
                                        <div className='IndexMainList-dk-box'>
                                            {
                                                mainListData.map((item,index)=>{
                                                    return(
                                                        <Fragment key={index}>
                                                            <button className="MainList-card border-0" onClick={()=>{handleGoToCoursePage02(allData,item.id,navigate)}}>
                                                                <div className={`MainList-card-img-box ${item.bg}`}>
                                                                    <img className="MainList-card-img" src={`/image/icons/${item.icon}.png`} alt="" />
                                                                </div>
                                                                <div className="MainList-card-text">
                                                                    <h6>{item.label}</h6>
                                                                    <p>{item.num} 門課程</p>
                                                                </div>
                                                            </button>
                                                        </Fragment>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="row h-100">
                                    <div className="col-8 h-100 mx-auto d-flex">
                                        <div className="IndexMainList-dk-title my-auto">
                                            <img className="IndexMainList-dk-deco" src="/image/deco/polygon-1.png" alt="" />
                                            <div className='w-100'>
                                                <h2 className='d-none d-lg-block'>想學什麼嗎？</h2>
                                                <h2 className='d-none d-lg-block'>一探究竟。</h2> 
                                                <img className="IndexMainList-dk-deco2" src="/image/deco/line-2.png" alt="" />
                                            </div>
                                            
                                        </div>
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
export default IndexMainList ; 