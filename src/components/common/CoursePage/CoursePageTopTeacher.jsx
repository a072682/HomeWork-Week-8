import { Fragment, useEffect, useState } from "react";
import './_CoursePageTopTeacher.scss';
import { handleGoToTeacherPage, handleTeacherNumALLDate } from "../../../slice/dataSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function CoursePageTopTeacher ({coursePageAllData}){

    const navigate = useNavigate();

    //取得全部資料
    const allData = useSelector((state) => state.data.defaultClassData);

    const [coursePageTopTeacherData, setCoursePageTopTeacherData] = useState([]);

    const [teacherNumALLDate, setTeacherNumALLDate] = useState(null);

    const getTopCoursePageItems = (input, num) => {
        const allProgressItems = [];
        input.forEach(section => {
            const groups = section.children || [];
            groups.forEach(group => {
                if (group.cardData.progress) {
                allProgressItems.push({
                    ...group,
                    category: section.label,
                    numValue: parseFloat(group.cardData.progress.replace('%', '')),
                });
                }
            });
        });

    return allProgressItems
        .sort((a, b) => b.numValue - a.numValue)
        .slice(0, num);
    };

    useEffect(() => {
        const result = getTopCoursePageItems(coursePageAllData,3);
        const result02 = handleTeacherNumALLDate(result);
        setCoursePageTopTeacherData(result); 
        setTeacherNumALLDate(result02);
        console.log("整理過後的矩陣:", result);
        console.log("導師的總學生數量:", result02);
    }, [coursePageAllData]);

    return(
        <>
            <div className='CoursePageTopTeacher'>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className='CoursePageTopTeacher-bg'>
                                <h2 className="TopTeacher-title">程式頂尖講師</h2>
                                <div className="row">
                                    {
                                        coursePageTopTeacherData.map((item,index)=>{
                                            return(
                                                <Fragment key={index}>
                                                    <div className="col-12 col-sm-4 col-lg-4  mx-auto">
                                                        <button className="TopTeacher-box" onClick={()=>{handleGoToTeacherPage(allData,item.id,navigate);}}>
                                                            <div className="TopTeacher-img-box">
                                                                <img className="TopTeacher-img" src={item.classData.teacher.teacherImg} alt="" />
                                                            </div>
                                                            
                                                            <div className="TopTeacher-content">
                                                                <h5>{item.classData.teacher.teacherName}</h5>
                                                                <p>{item.classData.teacher.teacherCaption}</p>
                                                            </div>
                                                        
                                                            <div className="TopTeacher-content2">
                                                                <p className="TopTeacher-num">{teacherNumALLDate} 個學生</p>
                                                                <div className="TopTeacher-evaluate">
                                                                    <p>⭐️{item.classData.teacher.score}
                                                                        <span>({teacherNumALLDate})</span>
                                                                    </p>
                                                                </div> 
                                                            </div>
                                                            
                                                        </button>
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
        </>
    )
}
export default CoursePageTopTeacher; 