import { Outlet, useLocation, useParams } from "react-router-dom";
import ClassPageContent from "../components/common/ClassPage/ClassPageContent";
import ClassPageIntro from "../components/common/ClassPage/ClassPageIntro";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../slice/authSlice";
import { loadUserData } from "../slice/userSlice";



function ClassPage (){

    const { id_first,id_third } = useParams();
    console.log("取得的id:",id_third);
    const location = useLocation();

    const dispatch = useDispatch();//使用中央函式

    // // 判斷是否為純 /CoursePage/:id_first 的路由
    const isAtClassRoot = location.pathname.includes(`/TeacherPage/`);

    const allData = useSelector((state) => state.data.defaultClassData);

    const [classPageAllData,setClassPageAllData] = useState([]);

    const handleClassPageAllData = (input, id_first, id_third) => {
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

    const userData = useSelector((state) => state.user.currentUserData);

    useEffect(() => {
        const email = localStorage.getItem('fakeEmail');
        const isLoggedIn = localStorage.getItem('fakeLogin') === 'true';

        if (isLoggedIn && email) {
            dispatch(login({ email })); // 還原登入狀態
            dispatch(loadUserData({ email })); // 還原 currentUserData
        }
    }, []);

    useEffect(()=>{
        const result = handleClassPageAllData(allData,id_first,id_third);
        setClassPageAllData(result);
        console.log("ClassPage整體資料:",result);
        console.log("OrderUserData:",userData);
    },[allData, id_third,userData])
    

    
    return (            
        <>
            {!isAtClassRoot &&(
            <>
                <ClassPageIntro classPageAllData={classPageAllData} id_first={id_first} id_third={id_third}/>
                <ClassPageContent classPageAllData={classPageAllData} userData={userData}/>
            </>
            )}

            {/* 巢狀子頁面，例如 TeacherPage */}
            <Outlet />
        </>
    )
}
export default ClassPage; 