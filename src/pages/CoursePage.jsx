import { Outlet, useLocation, useParams } from "react-router-dom";
import CoursePageClass from "../components/common/CoursePage/CoursePageClass";
import CoursePageHotChoice from "../components/common/CoursePage/CoursePageHotChoice";
import CoursePageIntro from "../components/common/CoursePage/CoursePageIntro";
import CoursePageTopTeacher from "../components/common/CoursePage/CoursePageTopTeacher";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";




function CoursePage (){

    const { id_first } = useParams();
    console.log("取得的id:",id_first);
    const location = useLocation();

    // 判斷是否為純 /CoursePage/:id_first 的路由
    const isNestedRoute = location.pathname.includes("/ClassPage/");

    
    const allData = useSelector((state) => state.data.defaultClassData);//取得全部資料

    const [coursePageAllData,setCoursePageAllData] = useState([]);

    const [coursePageTitleData,setCoursePageTitleData] = useState([]);

    const handleCoursePageTilteData = (input, id_first) => {
      const target = [];
      input.forEach(item_first => {
        if(item_first.id === id_first){
          target.push({
            ...item_first
          })
        }
      })
      if (!target) return []; // 若找不到則回傳空陣列
      return target;
    };

    const handleCoursePageAllData = (input, id_first) => {
      const target = input.find(item => item.id === id_first);
      if (!target) return []; // 若找不到則回傳空陣列
      return target.children || [];
    };

    useEffect(()=>{
      const result = handleCoursePageAllData(allData,id_first);
      const result02 = handleCoursePageTilteData(allData,id_first);
      setCoursePageAllData(result);
      setCoursePageTitleData(result02);
      console.log("CoursePage標題資料:",result02);
      console.log("CoursePage整體資料:",result);
    },[allData, id_first])

    return (
    <>
      {!isNestedRoute && (
        <>
          <CoursePageIntro coursePageAllData={coursePageAllData} coursePageTitleData={coursePageTitleData} id_first={id_first}/>
          <CoursePageHotChoice coursePageAllData={coursePageAllData}/>
          <CoursePageTopTeacher coursePageAllData={coursePageAllData}/>
          <CoursePageClass coursePageAllData={coursePageAllData}/>
        </>
      )}

      {/* 巢狀子頁面，例如 ClassPage */}
      <Outlet />
    </>
  );
}
export default CoursePage; 