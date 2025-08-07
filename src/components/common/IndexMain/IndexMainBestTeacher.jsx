import './_IndexMainBestTeacher.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import { Fragment, useEffect, useState } from 'react';
import Card03 from '../card/Card03';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getTopProgressItems, handleGoToTeacherPage, handleTeacherNumALLDate } from '../../../slice/dataSlice';


function IndexMainBestTeacher (){

    const navigate = useNavigate();

    const allData = useSelector((state) => state.data.defaultClassData);

    const [top3CardData, setTop3CardData] = useState([]);

    const [teacherNumALLDate, setTeacherNumALLDate] = useState(null);
    
    useEffect(() => {
        const result = getTopProgressItems(allData, 3);
        const result02 =  handleTeacherNumALLDate(result);
        setTop3CardData(
            result.map((item, index) => ({
            ...item,
            text: [
                `${item.name} 的線上課程深受學生喜愛。他的教學方法生動有趣，能夠深入淺出地講解複雜的音樂理論，並結合實際演奏技巧，使學生能夠快速進步。`,
                `${item.name} 的教學方式靈活且富有創意，能夠有效提升學生的寫作技巧和自信心。Kelly 注重實用性，針對學生的需求量身打造教學內容，並提供具體的反饋和建議。`,
                `${item.name} 的教學風格親切且耐心，能夠循序漸進地引導學生進入樂團的世界。學生們紛紛表示，K. Lee 的課程讓他們對音樂產生了濃厚的興趣！`
            ][index]
            }))
    );
    setTeacherNumALLDate(result02);
    console.log("(teacher)矩陣:", result);
    }, [allData]);

    const handleClickToCoursePage = (id) => {
        handleGoToTeacherPage(allData, id, navigate);
    };


    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col d-block d-xl-none">
                        <div className='IndexMainBestTeacher-mb'>
                            <div className='IndexMainBestTeacher-content py-80'>
                                <div className='BestTeacher-title position-relative'>
                                    <h2 className="d-block d-md-none">頂尖講師</h2>
                                    <h2 className="d-block d-md-none">帶你飛 </h2>
                                    <h2 className="d-none d-md-block text-center">頂尖講師帶你飛 </h2>
                                    <p>超真實學員評價，這些講師你絕對不能錯過！✨</p>
                                    <img className="position-absolute IndexMainBestTeacher-mb-deco" src={`${import.meta.env.BASE_URL}image/deco/flower-1.png`} alt="" />
                                </div>
                                <div className='IndexMainBestTeacher-cardgroups pt-24'>
                                    <Swiper
                                        className='h-100 pb-32 mb-24'
                                        modules={[EffectCoverflow, Pagination]}
                                        slidesPerView={1}
                                        loop={true}
                                        spaceBetween={8}
                                        pagination={{
                                            clickable: true,
                                            el: '.BestTeacher-pagination',
                                        }}
                                        breakpoints={{
                                            1200: {
                                            spaceBetween: 8,
                                            slidesPerView: 1,
                                            pagination: false,
                                            }
                                        }}
                                        >
                                        {top3CardData.map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <Card03 item={item} handleClickToCoursePage={handleClickToCoursePage}/>
                                            </SwiperSlide> 
                                        ))}
                                        <div className="BestTeacher-pagination"></div>
                                    </Swiper>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col d-none d-xl-block">
                        <div className='IndexMainBestTeacher-dk mt-120 mb-200'>
                            <div className="row">
                                <div className="col-6 mx-auto">
                                    <div className='BestTeacher-dk-title position-relative' >
                                        <h2>頂尖講師帶你飛</h2>
                                        <p>超真實學員評價，這些講師你絕對不能錯過！✨</p>
                                        <img className="position-absolute IndexMainBestTeacher-dk-deco" src={`${import.meta.env.BASE_URL}image/deco/flower-1.png`} alt="" />
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="row mt-40">
                                {top3CardData.map((item,index) => {
                                    return(
                                        <Fragment key={index}>
                                            <div className="col-4 mx-auto">
                                                <Card03 item={item} handleClickToCoursePage={handleClickToCoursePage} teacherNumALLDate={teacherNumALLDate}/>
                                            </div>
                                        </Fragment>
                                    )
                                })}
                            </div> 
                        </div> 
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default IndexMainBestTeacher; 