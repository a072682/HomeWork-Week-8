import { Navbar, Nav, Container, Form, Button, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { Fragment, useEffect, useState } from 'react';
import CustomDropdown from './CustomDropdown';
import OffcanvasPage from './OffcanvasPage';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../../slice/authSlice';
import { useNavigate } from "react-router-dom";
import './_Header.scss';
import IconDropdown from './IconDropdown';
import LoginDropdown from './LoginDropdown';
import { searchInput } from '../../slice/dataSlice';
import { loadUserData } from '../../slice/userSlice';





function Header() {
    const navigate = useNavigate();//頁面跳轉宣告

    const allData = useSelector((state) => state.data.defaultClassData);

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
        console.log("Header資料:",allData);
        console.log("userData:",userData);
    },[allData,userData]);

    const [searchIn, setSearchIn] = useState('');//紀錄搜尋欄的資料

    const dispatch = useDispatch();//使用中央函式

    const handleSearch = (input) => {
        const keyword = searchIn.trim();//移除搜尋欄資料的空白
        dispatch(searchInput(keyword));
        if (!keyword) {
            console.log("請輸入文字");
            return;
        };
        let result = null;
        input.forEach(item_first => {
            if (result) return; // 提前跳出後續處理

            (item_first.children || []).forEach(item_second => {
                if (item_second.label.toLowerCase().includes(keyword.toLowerCase())){
                    result = {
                            id_first: item_first.id,
                        };
                }
            });
        });
        if (!result) {
            setSearchIn("");
            console.log("找不到相關課程");
            return;
        }
        if (result) {
            setSearchIn("");
            console.log("header搜尋結果:",result);
            navigate(`/CoursePage/${result.id_first}`);
        }
        return result;
    };

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    useEffect(()=>{
        console.log("目前登入狀態:",isLoggedIn)
    },[isLoggedIn]);

    const allCardData = useSelector((state) => {//讀取中央資料
        return(
            state.data.defaultClassData
        )
    });

    useEffect(()=>{
        console.log("取得所有卡片資料(位置:):Header",allCardData)
    },[allCardData]);

    const handleLogout = (e) => {
        e.preventDefault();
        // 成功登出
        dispatch(logout());
        setExpanded(false);
        console.log('登出成功');
        navigate("/");
    };



  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expand="lg" className="react-navbar" expanded={expanded}>
      <Container>

        <div className='navbar-box d-flex align-items-center'>
            {/* 左上角 Logo */}
            <Link to="/" className='navbar-logo-box me-lg-24'>
                <img className='img-set' src={`${import.meta.env.BASE_URL}image/logo.png`} alt="logo" />
            </Link>
            

            {/* lg 以下的右上角：鈴鐺 icon + 購物車 icon + 漢堡選單按鈕 */}
            <div className="navbar-icon-box d-lg-none d-flex align-items-center ms-auto">
                {
                    isLoggedIn ? (
                        <>
                            <button className='border-0 p-0'>
                                <span className="material-symbols-outlined notifications-icon position-relative">
                                    notifications
                                    <span className="position-absolute navbar-icon-mark mark-14"></span>
                                </span>
                            </button>
                            <button className='border-0 p-0' onClick={()=>{navigate(`/OrderPage/${userData.id}`);}}>
                                <span className="material-symbols-outlined shopping_cart-icon position-relative">
                                    shopping_cart
                                    <span className="position-absolute navbar-icon-mark fs-12 mark-20 inter badge d-flex justify-content-center align-items-center">
                                        {userData?.shoppingCart?.items.length}
                                    </span>
                                </span>
                            </button>
                        </>
                    ) : 
                    (
                        <>
                            <Link to="/LoginPage" className="border-0 p-0">
                                <span className="material-symbols-outlined notifications-icon ">
                                    notifications
                                </span>
                            </Link>
                            <Link to="/LoginPage" className="border-0 p-0">
                                <span className="material-symbols-outlined shopping_cart-icon">
                                    shopping_cart
                                </span>
                            </Link>
                        </>
                    )
                }
                
                <button className="custom-toggle-btn" onClick={() => setExpanded(true)} aria-controls="navbarScroll">
                    <span className="material-symbols-outlined">
                        menu
                    </span>
                </button>
            </div>
            {/* lg 以上左側的探索下拉選單按鈕 */}
            <CustomDropdown allCardData={allCardData}/>
            {/* xl 以上中間的搜尋列 */}
            <Form className="d-none d-xl-flex align-items-center search-bar-box" 
                    onSubmit={(e) => {
                        e.preventDefault(); // ✅ 阻止預設表單提交
                        handleSearch(allData);
                    }}>
                <i className="material-symbols-outlined search-icon">search</i>
                <input  type="text" placeholder="搜尋各種音樂、數學、程式及設計課程" className="form-control" aria-label="Search"
                        value={searchIn}
                        onChange={(e) => setSearchIn(e.target.value)}/>
                <button type="submit" className="search-btn" onClick={()=>{handleSearch(allData);}}>搜尋</button>
            </Form>

            {/* lg 以上右側區塊：鈴鐺 + 購物車 + 登入/註冊按鈕 */}
            <div className="d-none d-lg-flex align-items-center gap-16 ms-auto">
                {
                    isLoggedIn ? 
                    (
                        <>
                            <IconDropdown />
                            <button className='border-0 p-0' type="button" onClick={()=>{navigate(`/OrderPage/${userData.id}`);}}>
                                <span className="material-symbols-outlined shopping_cart-icon position-relative">
                                    shopping_cart
                                    <span className="position-absolute navbar-icon-mark fs-12 mark-20 inter badge d-flex justify-content-center align-items-center">
                                        {userData?.shoppingCart?.items.length}
                                    </span>
                                </span>
                            </button>
                            <LoginDropdown handleLogout={handleLogout} userData={userData} navigate={navigate}/>
                        </>
                    )
                    :
                    (
                        <>  <Link to="/LoginPage" className="border-0 p-0">
                                <span className="material-symbols-outlined notifications-icon">
                                    notifications
                                </span>
                            </Link>
                            <Link to="/LoginPage" className="border-0 p-0">
                                <span className="material-symbols-outlined shopping_cart-icon">
                                    shopping_cart
                                </span>
                            </Link>
                            <Link to="/LoginPage" className="login-btn">登入/註冊</Link>
                        </>
                    )
                }
                
            </div>
        </div>
        <OffcanvasPage expanded={expanded} onClose={() => setExpanded(false)} isLoggedIn={isLoggedIn} handleLogout={handleLogout} setExpanded={setExpanded}/>
      </Container>
    </Navbar>
  );
}

export default Header;
