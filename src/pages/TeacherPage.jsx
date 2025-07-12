import { useParams } from "react-router-dom";
import TeacherPageClass from "../components/common/TeacherPage/TeacherPageClass";
import TeacherPageIntro from "../components/common/TeacherPage/TeacherPageIntro";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function TeacherPage (){

    const { id_first,id_third } = useParams();
    console.log("取得的id:",id_third);

    const allData = useSelector((state) => state.data.defaultClassData);

    const [teacherPageAllData,setTeacherPageAllData] = useState([]);

    const handleTeacherPageAllData = (input, id_first, id_third) => {
    const target = [];
    input.forEach(first => {
        if (first.id === id_first) {
        const item_second = first.children || [];
        item_second.forEach(second => {
            const item_third = second.children || [];
            item_third.forEach(third => {
            if (third.id === id_third) {
                target.push({ ...third });
            }
            });
        });
        }
    });

    return target;
    };

    useEffect(()=>{
        const result = handleTeacherPageAllData(allData,id_first,id_third);
        setTeacherPageAllData(result);
        console.log("TeacherPage整體資料:",result);
    },[allData, id_third])

    return(
        <>
          <TeacherPageIntro teacherPageAllData = {teacherPageAllData}/>
          <TeacherPageClass teacherPageAllData = {teacherPageAllData}/>
        </>
    )
}
export default TeacherPage; 