import { useEffect, useState } from 'react';
import './_TeacherPageClass.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card04 from '../card/Card04';
import { handleGoToClassPage, handleTeacherALLDate } from '../../../slice/dataSlice';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function TeacherPageClass({teacherPageAllData}) {

    const navigate = useNavigate();
    
    const allData = useSelector((state) => state.data.defaultClassData);

    const teacherName = teacherPageAllData[0]?.classData?.teacher?.teacherName;
    const[teacherPageIntroAllData,setAeacherPageIntroAllData] = useState(null);//老師課程數量

    useEffect(()=>{
            const result03 = handleTeacherALLDate(allData,teacherName);
            setAeacherPageIntroAllData(result03);
            console.log("TeacherPage引入資料02:",teacherPageAllData);
            console.log("老師課程數量:",result03);
        },[teacherPageAllData])

  return (
    <> 
        <div className='TeacherPageClass'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="TeacherPageClass-bg">
                            <div className='Class-title-box'>
                                <img className='title-img' src={`${import.meta.env.BASE_URL}image/deco/flower-5.png`} alt="" />
                                <p>{teacherName}開的課</p>
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
                                        spaceBetween: 24,
                                        slidesPerView: 2,
                                        },
                                        992: {
                                        spaceBetween: 24,
                                        slidesPerView: 3,
                                        },
                                        1400: {
                                        spaceBetween: 24,
                                        slidesPerView: 4,
                                        },
                                    }}
                                    >
                                    {teacherPageIntroAllData?.map((item,index) => (
                                        <SwiperSlide key={index}>
                                            <button type='button' className='border-0 p-0' onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
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
    </>
  )
}

export default TeacherPageClass;