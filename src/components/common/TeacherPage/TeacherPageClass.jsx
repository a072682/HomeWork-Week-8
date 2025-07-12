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
  
    const Classcard = [
        {
            title:"創意寫作工坊：從靈感到出版的全過程",
            img:"/image/course-4.png",
            user_img:"/image/user01.jpg",
            name:"Kelly Hsu",
            time:"優惠倒數 10 天",
            progress:"81%",
            score:"4.0",
            NumberOfPeople:"521",
            price:"2,480",
            origin_price:"3,200",
        },
        {
            title:"健康廚房：營養均衡的素食料理指南",
            img:"/image/course-1.png",
            user_img:"/image/user02.jpg",
            name:"希姐帶你吃",
            time:"優惠倒數 17 天",
            progress:"281%",
            score:"4.8",
            NumberOfPeople:"1,397 ",
            price:"1,680",
            origin_price:"2,980",
        },
        {
            title:"音樂製作入門：從零開始創作你的音樂",
            img:"/image/course-2.png",
            user_img:"/image/user03.jpg",
            name:"K.Dee",
            time:"優惠倒數 9 天",
            progress:"76%",
            score:"4.3",
            NumberOfPeople:"420",
            price:"2,680",
            origin_price:"3,200",
        },
        {
            title:"掌握商業攝影：打造你的專業攝影事業",
            img:"/image/course-3.png",
            user_img:"/image/user04.jpg",
            name:"Mikeeee",
            time:"優惠倒數 1 天",
            progress:"98%",
            score:"4.6",
            NumberOfPeople:"290",
            price:"1,980",
            origin_price:"3,200",
        },
    ]

   const w_Classcard = [...Classcard, ...Classcard];

  return (
    <> 
        <div className='TeacherPageClass'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="TeacherPageClass-bg">
                            <div className='Class-title-box'>
                                <img className='title-img' src="/image/deco/flower-5.png" alt="" />
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