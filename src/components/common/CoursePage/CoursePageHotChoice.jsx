
import './_CoursePageHotChoice.scss';
import 'swiper/css';
import { useState,useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Tab, Nav } from 'react-bootstrap';
import Card04 from '../card/Card04';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { handleGoToClassPage } from '../../../slice/dataSlice';




function CoursePageHotChoice ({coursePageAllData}){

    const navigate = useNavigate();

    const allData = useSelector((state) => state.data.defaultClassData);

    const [coursePageData, setCoursePageData] = useState([]);//CoursePage用總資料

    const getTopCoursePageItems = (input, num) => {
        const allProgressItems = [];
        input.forEach(section => {
            const groups = section.children || [];
            groups.forEach(group => {
                if (group.cardData.progress) {
                allProgressItems.push({
                    ...group,
                    cardData:{
                        ...group.cardData,
                        progressValue: parseFloat(group.cardData.progress.replace('%', '')),
                        category: section.label,
                    }
                });
                }
            });
        });

    return allProgressItems
        .sort((a, b) => b.progressValue - a.progressValue)
        .slice(0, num);
    };

    useEffect(() => {
    const result = getTopCoursePageItems(coursePageAllData,5);
        setCoursePageData(result); 
        console.log("整理過後的矩陣:", result);
    }, [coursePageAllData]);

    const TopicsItem = [
        {
            title:"HTML 5",
            num:"2103",
        },
        {
            title:"Javascript",
            num:"891",
        },
        {
            title:"CSS 3 ",
            num:"240",
        },
        {
            title:"Python",
            num:"1384",
        },
    ]

    const [activeTab, setActiveTab] = useState('popular');//tab控制

    

    return(
        <>  
            <div className='CoursePageHotChoice'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                                <Nav className='HotChoice-nav'>
                                    <Nav.Item className='HotChoice-nav-item'>
                                        <Nav.Link className="nav-link" eventKey="popular">最熱門</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="HotChoice-nav-item">
                                        <Nav.Link className="nav-link" eventKey="newclasses">最新課程</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className="HotChoice-nav-item">
                                        <Nav.Link className="nav-link" eventKey="hottopics">話題最高</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className='HotChoice-tab-content '>
                                    <Tab.Pane eventKey="popular">
                                        <div className='HotChoice-cardgroups'>
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
                                                {coursePageData.map((item,index) => (
                                                    <SwiperSlide key={index}>
                                                        <button type='button' className='border-0 p-0' onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                            <Card04 item={item} />
                                                        </button>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className='HotChoice-card-btn'>
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
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="newclasses">
                                        <div className='HotChoice-cardgroups'>
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
                                                {coursePageData.map((item,index) => (
                                                    <SwiperSlide key={index}>
                                                        <button type='button' className='border-0 p-0' onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                            <Card04 item={item} />
                                                        </button>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className='HotChoice-card-btn'>
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
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="hottopics">
                                        <div className='HotChoice-cardgroups'>
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
                                                {coursePageData.map((item,index) => (
                                                    <SwiperSlide key={index}>
                                                        <button type='button' className='border-0 p-0' onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                            <Card04 item={item} />
                                                        </button>
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                            <div className='HotChoice-card-btn'>
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
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='PopularTopics'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='Topics-top'>
                                <h3 className='Topics-title'>熱門主題</h3>
                                <div className='Topics-top-btn'>
                                    <button className="Topics-prev">
                                        <span class="material-symbols-outlined">
                                            arrow_back
                                        </span>
                                    </button>
                                    <button className="Topics-next">
                                        <span class="material-symbols-outlined">
                                            arrow_forward
                                        </span>
                                    </button >
                                </div>
                            </div>
                            <div className="Topics-item">
                                <Swiper
                                    className='h-100'
                                    modules={[EffectCoverflow,Navigation,Pagination]}
                                    slidesPerView="auto"
                                    loop={true}
                                    spaceBetween={16}
                                    pagination={{
                                        clickable: true,
                                        el: '.Topics-pagination',
                                    }}
                                    navigation={{
                                        nextEl: '.Topics-next',
                                        prevEl: '.Topics-prev',
                                    }}
                                    >
                                    {w_TopicsItem.map((item,index) => (
                                        <SwiperSlide key={index} style={{ width: 'fit-content' }}>
                                            <button className="Topics-item-btn">
                                                <h4>{item.title}</h4>
                                                <p>{item.num} 個課程</p>
                                            </button>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <div className="Topics-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* 暫時不顯示 */}
        </>
    )
}
export default CoursePageHotChoice; 