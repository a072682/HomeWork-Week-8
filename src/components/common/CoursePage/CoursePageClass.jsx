import { Fragment, useEffect, useState } from "react";
import './_CoursePageClass.scss';
import Card02 from "../card/Card02";
import ReactPagination from "../ReactPagination";
import { Nav, Tab } from "react-bootstrap";
import { useSelector } from "react-redux";
import { handleGoToClassPage } from "../../../slice/dataSlice";
import { useNavigate } from "react-router-dom";




function CoursePageClass ({coursePageAllData,coursePageTitleData,coursePageLowPriceData}){

    const navigate = useNavigate();

    console.log("看看",coursePageTitleData);
    
    const allData = useSelector((state) => state.data.defaultClassData);

    const CoursePageTabData = useSelector((state) => state.data.CoursePageIntroTab);//得到tab資訊

    const [coursePageClassData,setCoursePageClassData] = useState([]);//經過tab篩選過後的矩陣

    const handleCoursePageClassData = (input,TabData) => {
        const result = [];
        input.forEach(section => {
        const groups = section.children || [];
            if (TabData === "所有課程") {
                result.push(...groups,);
            }else if(section.label === TabData){
                result.push(...groups,);
            }
        });
        console.log("Class篩選後資料:",result);
        return result;
    }

    useEffect(()=>{
        console.log("Class資料:",coursePageAllData);
        const result = handleCoursePageClassData(coursePageAllData,CoursePageTabData);
        setCoursePageClassData(result);
    },[coursePageAllData,CoursePageTabData]);

    useEffect(() => {
        setCurrentPage(1);
    }, [CoursePageTabData]); // ⬅️ 只要分類變了，就跳回第一頁

    const[ClassBtn,setClassBtn] = useState("最新課程");

    const [activeTab, setActiveTab] = useState('NewCourse');//tab控制

    const [currentPage, setCurrentPage] = useState(1);//頁碼狀態
    const itemsPerPage = 8;//上限

    const paginatedData = coursePageClassData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
    );

    return(
        <>
            <div className='CoursePageClass'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='CoursePageClass-bg'>
                                
                                <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                                    <div className='CoursePageClass-top'>
                                        <h2 className="class-title">查看 {coursePageClassData.length} 筆與「<span>{CoursePageTabData === "所有課程"?(`所有${coursePageTitleData[0]?.label}`):(CoursePageTabData)}</span>」的相關課程</h2>
                                        <Nav className='class-tabs'>
                                            <Nav.Item className=''>
                                                <Nav.Link className={`class-tab ${ClassBtn === "最新課程" ? ("active"):("")} `} eventKey="NewCourse" onClick={()=>{setClassBtn("最新課程")}}>最新課程</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="">
                                                <Nav.Link className={`class-tab ${ClassBtn === "最高人氣" ? ("active"):("")} `} eventKey="TopPopular" onClick={()=>{setClassBtn("最高人氣")}}>最高人氣</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="">
                                                <Nav.Link className={`class-tab ${ClassBtn === "最低價格" ? ("active"):("")} `} eventKey="LowPrice" onClick={()=>{setClassBtn("最低價格")}}>最低價格</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                    <Tab.Content className='HotChoice-tab-content '>
                                        <Tab.Pane eventKey="NewCourse">
                                            <div className="row row-gap-12">
                                                {
                                                    paginatedData.map((item,index)=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <div className="col-12 col-md-6 col-lg-4 col-xl-3">
                                                                    <button type="button" className="border-0 p-0 w-100" onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                                        <Card02 item={item}/>
                                                                    </button>
                                                                </div>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="TopPopular">
                                            <div className="row">
                                                {
                                                    paginatedData.map((item,index)=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <div className="col-12 col-lg-3">
                                                                    <button type="button" className="border-0 px-12 w-100" onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                                        <Card02 item={item}/>
                                                                    </button>
                                                                    
                                                                </div>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="LowPrice">
                                            <div className="row">
                                                {
                                                    coursePageLowPriceData?.map((item,index)=>{
                                                        return(
                                                            <Fragment key={index}>
                                                                <div className="col-12 col-md-6 col-lg-3">
                                                                    <button type="button" className="border-0 px-12 w-100" onClick={()=>{handleGoToClassPage(allData,item.id,navigate)}}>
                                                                        <Card02 item={item}/>
                                                                    </button>
                                                                </div>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Tab.Container>
                                <div className="row">
                                    <div className="col">
                                        <div className="mt-24">
                                            <ReactPagination 
                                                currentPage={currentPage}
                                                totalPages={Math.ceil(coursePageClassData.length / itemsPerPage)}
                                                onPageChange={setCurrentPage}
                                            />
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
export default CoursePageClass; 