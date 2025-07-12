import { Link, useNavigate } from 'react-router-dom';
import './_ClassPageIntro.scss';
import { useEffect, useState } from 'react';



function ClassPageIntro ({classPageAllData,id_first,id_third}){

    const navigate = useNavigate();

    const handleTeacherClassAllTime = (input)=>{
        let totalSeconds = 0;
        input[0]?.classData?.classAccordion?.map((first)=>{
            first.bodycontent.map((second)=>{
                if(second.duration){
                    const [min, sec] = second.duration.split(':').map(Number); // "03:00" → [3, 0]
                    totalSeconds += min * 60 + sec;
                }
            })
        })

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        return `${hours} 小時 ${minutes} 分鐘`;
    }

    const[accordionAllTime,setAccordionAllTime] = useState(null);

    useEffect(()=>{
        const result = handleTeacherClassAllTime(classPageAllData);
        setAccordionAllTime(result);
        console.log("引入資料:",classPageAllData);
        console.log("統計時間:",result);
    },[classPageAllData])


    return(
        <>
            <div className='ClassPageIntro'>
                <div className="container">
                    <div className="row">
                        <div className='ClassPageIntro-bg'>
                            <div className="col-12">
                                <div className="Intro-breadcrumb">
                                    <ol className="breadcrumb ClassPage-breadcrumb">
                                        <li className="breadcrumb-item ClassPage-breadcrumb-item">
                                            <Link className='link01' to="/">所有課程</Link>
                                        </li>
                                        <li className="breadcrumb-item ClassPage-breadcrumb-item">
                                            <Link className='link02' to={`/CoursePage/${id_first}`}>{id_first.replace("cat-", "")}</Link>
                                        </li>
                                        <li className="breadcrumb-item ClassPage-breadcrumb-item active">
                                            <Link className='link03' to={`/CoursePage/${id_first}/ClassPage/${id_third}`}>{classPageAllData[0]?.classData?.category}</Link>
                                        </li>
                                    </ol>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-6">
                                        <div className='Intro-img'>
                                            <img src={classPageAllData[0]?.classData?.img} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-6">
                                        <div className='Intro-body'>
                                            <div className='Intro-tag'>
                                                {
                                                    classPageAllData[0]?.classData?.tag?.map((item,index)=>{
                                                        return(
                                                            <div key={index} className='teg'>{item}</div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className='Intro-title'>
                                                <h2>{classPageAllData[0]?.classData?.title}</h2>
                                            </div>
                                            <div className='Intro-content'>
                                                <p className='text'>{classPageAllData[0]?.classData?.content}</p>
                                                <p className='people-num'>{classPageAllData[0]?.classData?.NumberOfPeople} 人<span>已註冊</span></p>
                                            </div>
                                            <div className='Intro-btn'>
                                                <button className='active' onClick={()=>{navigate("/LoginPage");}}>
                                                    <span className="material-symbols-outlined bookmark-icon">
                                                        bookmark
                                                    </span>
                                                    <p>收藏課程</p>
                                                </button>
                                                <button onClick={()=>{navigate("/LoginPage");}}>
                                                    <span className="material-symbols-outlined share-icon">
                                                        share
                                                    </span>
                                                    <p>分享課程</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                    </div>
                            <div className="ClassPage-score">
                                <div className="score-box">
                                    <div className="score-item">
                                        <div className='item-title' >
                                            <img src={classPageAllData[0]?.classData?.teacher?.teacherImg} alt="" />
                                            <h3>{classPageAllData[0]?.classData?.teacher?.teacherName}</h3>
                                        </div>
                                        <p>{classPageAllData[0]?.classData?.teacher?.teacherCaption}</p>
                                    </div>
                                    <div className="score-item">
                                        <p className='item-title02'>⭐️{classPageAllData[0]?.classData?.teacher?.score}</p>
                                        <p>{classPageAllData[0]?.comments?.length}條評論</p>
                                    </div>
                                    <div className="score-item">
                                        <p className='item-title03'>{accordionAllTime}</p>
                                        <p>{classPageAllData[0]?.classData?.classAccordion?.length} 個單元，4 個課後學習作業</p> 
                                    </div>
                                    <div className="score-item">
                                        <p className='item-title04'>{classPageAllData[0]?.classData?.teacher?.scoreTitle}</p>
                                        <p>{classPageAllData[0]?.classData?.NumberOfPeople} 人已註冊</p>
                                    </div>
                                </div> 
                            </div>
                </div>
            </div>
        </>
    )
}
export default ClassPageIntro; 