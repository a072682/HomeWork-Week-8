import { Link, useNavigate } from 'react-router-dom';
import IndexMainBestTeacher from '../components/common/IndexMain/IndexMainBestTeacher';
import IndexMainHotCourses from '../components/common/IndexMain/IndexMainHotCourses';
import IndexMainIntro from '../components/common/IndexMain/IndexMainIntro';
import IndexMainList from '../components/common/IndexMain/IndexMainList';
import IndexMainTopChoices from '../components/common/IndexMain/IndexMainTopChoices';
import { useSelector } from 'react-redux';

import './_Index.scss';
import { useEffect } from 'react';


function Index (){

    const allData = useSelector((state) => state.data.defaultClassData);

    useEffect(()=>{
        console.log("取得所有卡片資料:",allData)
    },[allData]);

    return(
        <>
            <IndexMainIntro allData={allData}/>
            <IndexMainHotCourses allData={allData}/>
            <IndexMainTopChoices allData={allData}/>
            <IndexMainList allData={allData}/>
            <IndexMainBestTeacher allData={allData}/>
        
            <Link to="/OrderPage">記得刪除4</Link>
            <Link to="/OrderPage2">記得刪除5</Link>
            <Link to="/OrderPage3">記得刪除6</Link>
            <Link to="/ProfilePage">記得刪除7</Link>
        </>
    )
}
export default Index; 