import { createHashRouter } from "react-router-dom";
import FrontLayout from "../layouts/FrontLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CoursePage from "../pages/CoursePage";
import ClassPage from "../pages/ClassPage";
import TeacherPage from "../pages/TeacherPage";
import Index from "../pages/Index";
import OrderPage from "../pages/OrderPage";
import OrderPage2 from "../pages/OrderPage2";
import OrderPage3 from "../pages/OrderPage3";
import ProfilePage from "../pages/ProfilePage";






const router = createHashRouter([ //createHashRouter為建立router的方法
	{
		path:"/",
		element: <FrontLayout />,
        children:[
            {
                path: "",
                element: <Index />,
            },
            {
                path: "CoursePage/:id_first",
                element: <CoursePage />,
                children: [
                    {
                        path: "ClassPage/:id_third",
                        element: <ClassPage />,
                        children: [
                            {
                                path: "TeacherPage/:id_third",
                                element: <TeacherPage />,
                            },
                        ],
                    },
                ],
            },
            {
                path: "OrderPage/:id_name",
                element: <OrderPage />,
            },
            {
                path: "OrderPage2/:id_name",
                element: <OrderPage2 />,
            },
            {
                path: "OrderPage3/:id_name",
                element: <OrderPage3 />,
            },
            {
                path: "ProfilePage/:id_name",
                element: <ProfilePage />,
            },
        ],
	},
    {
        path: "/LoginPage",
        element: <LoginPage />,
    },
    {
        path: "/RegisterPage",
        element: <RegisterPage />,
    }
])
export default router;