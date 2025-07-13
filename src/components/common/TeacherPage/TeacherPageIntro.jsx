import { useEffect, useState } from 'react';
import './_TeacherPageIntro.scss';
import { handleTeacherALLDate, handleTeacherCommentsALLDate, handleTeacherNumALLDate } from '../../../slice/dataSlice';
import { useSelector } from 'react-redux';


function TeacherPageIntro({teacherPageAllData}) {

const allData = useSelector((state) => state.data.defaultClassData);

const teacherName = "六角學院";
  
const[teacherPageIntroAllData,setAeacherPageIntroAllData] = useState(null);//老師課程數量
const[teacherClassAllNumData,setTeacherClassAllNumData]=useState(null);//老師課程總人數加總
const[teacherClassAllCommentsData,setTeacherClassAllCommentsData]=useState(null);//老師課程總評論加總

    useEffect(()=>{
        const result03 = handleTeacherALLDate(allData,teacherName);
        const result04 = handleTeacherNumALLDate(result03);
        const result05 = handleTeacherCommentsALLDate(result03);
        setAeacherPageIntroAllData(result03);
        setTeacherClassAllNumData(result04);
        setTeacherClassAllCommentsData(result05);
        console.log("TeacherPage引入資料01:",teacherPageAllData);
        console.log("老師課程數量:",result03);
        console.log("老師課程總人數加總:",result04);
        console.log("老師課程總評論加總:",result05);
    },[teacherPageAllData])
    

  return (
    <>
        <div className='TeacherPageIntro'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="TeacherPageIntro-bg">
                            <div className='Intro-img-box'>
                                <img className='Intro-img' src={teacherPageAllData[0]?.classData?.teacher?.teacherImg} alt="" />
                            </div> 
                            <div className='content-container'>
                                <h2>{teacherPageAllData[0]?.classData?.teacher?.teacherName}</h2>
                                <div className='score-container'>
                                    <p>{teacherPageIntroAllData?.length}<span>堂課</span></p>
                                    <p className='mid'>{teacherClassAllCommentsData}<span>評論數</span></p>
                                    <p>{teacherClassAllNumData}<span>個學生</span></p>
                                </div>
                                <p className='text'>
                                    {teacherPageAllData[0]?.classData?.teacher?.teacherIntroduce}
                                </p>
                                <div className='icon-container'>
                                    <button>
                                        <img className='line-icon' src={`${import.meta.env.BASE_URL}image/icons/line2.png`} alt="" />
                                    </button>
                                    <button>
                                        <img className='youtube-icon' src={`${import.meta.env.BASE_URL}image/icons/youtube2.png`} alt="" />
                                    </button>
                                    <button>
                                        <img className='facebook-icon' src={`${import.meta.env.BASE_URL}image/icons/facebook2.png`} alt="" />
                                    </button>
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

export default TeacherPageIntro;