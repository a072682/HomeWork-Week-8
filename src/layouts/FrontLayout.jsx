import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { useEffect } from "react";


function FrontLayout(){

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // 每次路由變化時自動滾到頂部
    }, [location]);

    return(
        <>   
            <Header />
            <Outlet />
            <Footer />          
        </>
    )
}
export default FrontLayout;