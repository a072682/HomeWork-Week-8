import { Link, useNavigate } from 'react-router-dom';
import './_OffcanvasPage.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { Fragment, useEffect, useState } from 'react';
import OffcanvasSubpagePage from './OffcanvasSubpagePage';
import { Tab, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';





function OffcanvasPage({ expanded, onClose, isLoggedIn, handleLogout, setExpanded }) {

    const navigate = useNavigate();//頁面跳轉宣告

    const allData = useSelector((state) => state.data.defaultClassData);
    
    const userData = useSelector((state) => state.user.currentUserData);

    const [activeIndex, setActiveIndex] = useState("探索全部"); // 儲存目前哪個被點

    const [activeSubPage, setActiveSubPage] = useState(null); // ⬅️ 子頁面狀態

    const [subpageData, setSubpageData] = useState(null); // ⬅️ 子頁面資料

    const [activeTab, setActiveTab] = useState('explore');//tab控制



    useEffect(()=>{
        console.log("目前登入狀態:",isLoggedIn);
        console.log("手機模式引入檔案:",allData);
        console.log("手機模式引入檔案2:",userData)
    },[isLoggedIn,allData,userData]);

    useEffect(()=>{
        console.log("子頁面資料更新:",subpageData);
    },[subpageData]);

    const member = [
        {
            title:"個人檔案",
            icon:"account_circle",
        },
        {
            title:"我的收藏",
            icon:"bookmark",
        },
        {
            title:"帳號設定",
            icon:"settings",
        },
        {
            title:"訂單記錄",
            icon:"article",
        },
        {
            title:"作業成果",
            icon:"edit",
        },
    ];

    // 點選 offcanvas 主選單按鈕後的行為
    const handleOffcanvasBtn = (title) => {
        const newActiveSubPage = allData.find((item)=>item.label === title).children
        setActiveIndex(title);
        setActiveSubPage(title); // 有對應子頁的才進入
        setSubpageData(newActiveSubPage);
    };

    const handleGoToProfilePage = ()=>{
        setActiveIndex("探索全部");
        setActiveSubPage(null);//關閉子頁面
        setActiveTab('explore');
        setExpanded(false);//關閉主頁面
        navigate(`/ProfilePage/${userData.id}`);
    }

    const handleLogoutDefault = ()=>{
        setActiveIndex("探索全部");
        setActiveSubPage(null);
        setActiveTab('explore');
    }
    

  return (
    <AnimatePresence>
        {
            isLoggedIn?
                (
                    expanded && (
                        <>
                            {/* 遮罩區（點擊後關閉） */}
                            <div className="offcanvas-backdrop" onClick={onClose}></div>

                            {/* 側邊選單內容 */}
                            <motion.div     className="offcanvas-panel"
                                            drag="x" //允許橫向拖曳
                                            dragDirectionLock //使用者一開始「橫向滑動」後（x 軸），就會「鎖定橫向拖曳」避免出現滑一滑跑成 y 軸
                                            dragConstraints={{ left: 0, right: 0 }}//Framer Motion 需要一個 dragConstraints 屬性存在才能啟用拖曳不限制移動距離，純粹是解鎖拖曳功能
                                            onDragEnd={(event, info) => { //拖曳結束後觸發（根據滑動距離決定關閉）
                                                if (info.offset.x < -150) { // 左滑超過 150px → 關閉
                                                    onClose();
                                                    setActiveIndex("探索全部");
                                                }
                                            }}
                                            animate={{ x:  0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                            initial={{ x: '-100%' }} // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                            exit={{ x: '-100%' }}//離場動畫的終點 若用 AnimatePresence 管理退出動畫
                                            transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                            >
                                
                                    
                                    <Tab.Container activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                                        {/* Tab 選單區 */}
                                        <Nav className='d-flex flex-row tab-box'>
                                            <Nav.Item className='tab-item'>
                                                <Nav.Link className="tab-link" eventKey="explore">探索</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item className="tab-item">
                                                <Nav.Link className="tab-link" eventKey="member">我的會員</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        {/* Tab 內容區 */}
                                        <Tab.Content className='h-100'>
                                            <Tab.Pane eventKey="explore">
                                                <AnimatePresence>
                                                    <motion.div     className="offcanvas-box px-24 py-12 d-flex flex-column"
                                                                    animate={{ x: activeSubPage ? '-100%' : 0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                                                    initial={{ x: '-100%' }} // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                                                    exit={{ x: '-100%' }}//離場動畫的終點 若用 AnimatePresence 管理退出動畫
                                                                    transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                                                    >
                                                            <div className="offcanvas-header px-24 py-12 d-flex justify-content-between align-items-center">
                                                                <p>{activeIndex}</p>
                                                            </div>

                                                            <div className="offcanvas-body d-flex flex-column gap-3">
                                                                {
                                                                    allData.map((item)=>{
                                                                        return(
                                                                            <Fragment key={item.id}>
                                                                                <button className={`offcanvas-btn ${activeIndex === item.label ? 'active' : ''} 
                                                                                                                d-flex justify-content-between align-items-center`}
                                                                                        onClick={() => handleOffcanvasBtn(item.label)}>
                                                                                        {item.label}
                                                                                    <span className="material-symbols-outlined">
                                                                                        chevron_right
                                                                                    </span>
                                                                                </button>
                                                                            </Fragment>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                    </motion.div>
                                                </AnimatePresence>
                                                <AnimatePresence>
                                                    {/* 📄 子頁面（像「人文」） */}
                                                    {activeSubPage && (   
                                                        <OffcanvasSubpagePage activeSubPage={activeSubPage} setActiveSubPage={setActiveSubPage} isLoggedIn={isLoggedIn} subpageData={subpageData} setActiveIndex={setActiveIndex} setActiveTab={setActiveTab} 
                                                        setExpanded={setExpanded}/>
                                                    )}
                                                </AnimatePresence>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="member">
                                                <div className="member-box px-24 py-16 d-flex flex-column">
                                                                    
                                                        <div className="member-header pb-15">
                                                            <div className='d-flex'>
                                                                <div className='member-img-box'>
                                                                    <img className='img-set' src={`${import.meta.env.BASE_URL}image/avatar-1.png`} alt="" />
                                                                </div>
                                                                <div>
                                                                    <p className='fw-600 fs-16 lh-15 col-000000 poppins'>Jessica</p>
                                                                    <p className='fw-400 fs-14 lh-15 col-4b4b4b poppins'>學習初心者</p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="member-body mt-16 pb-15">
                                                            {
                                                                member.slice(0, 3).map((item,index)=>{
                                                                    return(
                                                                        <Fragment key={index}>
                                                                            <button className='d-flex gap-8 py-12 px-24 border-0 bg-ffffff' 
                                                                                    onClick={()=>{handleGoToProfilePage();}}>
                                                                                <span className="material-symbols-outlined col-4b4b4b">
                                                                                    {item.icon}
                                                                                </span>
                                                                                <p className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>{item.title}</p>
                                                                            </button>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>

                                                        <div className="member-body2 mt-16 pb-15">
                                                            {
                                                                member.slice(3, 5).map((item,index)=>{
                                                                    return(
                                                                        <Fragment  key={index}>
                                                                            <button className='d-flex gap-8 py-12 px-24 border-0 bg-ffffff'
                                                                                    onClick={()=>{handleGoToProfilePage();}}>
                                                                                <span className="material-symbols-outlined col-4b4b4b">
                                                                                    {item.icon}
                                                                                </span>
                                                                                <p className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>{item.title}</p>
                                                                            </button>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        <div className="member-bottom mt-auto d-flex justify-content-start align-items-center">
                                                            <button type='button' className='d-flex gap-8 py-12 px-24 border-0'
                                                                    onClick={(event)=>{handleLogout(event);handleLogoutDefault();}}>
                                                                <span className="material-symbols-outlined col-4b4b4b">
                                                                    logout
                                                                </span>
                                                                <p className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>登出</p>
                                                            </button>
                                                        </div>
                                                </div>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                            </motion.div>
                        </>
                    )
                )
                :
                (
                    expanded && (
                        <>
                            {/* 遮罩區（點擊後關閉） */}
                            <div className="offcanvas-backdrop" onClick={onClose}></div>

                            {/* 側邊選單內容 */}
                            <motion.div     className="offcanvas-panel"
                                            drag="x" //允許橫向拖曳
                                            dragDirectionLock //使用者一開始「橫向滑動」後（x 軸），就會「鎖定橫向拖曳」避免出現滑一滑跑成 y 軸
                                            dragConstraints={{ left: 0, right: 0 }}//Framer Motion 需要一個 dragConstraints 屬性存在才能啟用拖曳不限制移動距離，純粹是解鎖拖曳功能
                                            onDragEnd={(event, info) => { //拖曳結束後觸發（根據滑動距離決定關閉）
                                                if (info.offset.x < -150) { // 左滑超過 150px → 關閉
                                                    onClose();
                                                    setActiveIndex("探索全部");
                                                }
                                            }}
                                            animate={{ x:  0 }} // 進場後的最終狀態 當顯示時位置為 0（正常展開）
                                            initial={{ x: '-100%' }} // 進場動畫的起點 一開始的位置：在螢幕外左側（-100%）
                                            exit={{ x: '-100%' }}//離場動畫的終點 若用 AnimatePresence 管理退出動畫
                                            transition={{ type: 'tween', duration: 0.3 }}//控制動畫速度與手感
                            >
                                    <div className="offcanvas-box px-24 py-12 d-flex flex-column">
                                                   
                                            <div className="offcanvas-header px-24 py-12 d-flex justify-content-between align-items-center">
                                                <p>{activeIndex}</p>
                                            </div>

                                            <div className="offcanvas-body d-flex flex-column gap-3">
                                                {
                                                    allData.map((item)=>{
                                                        return(
                                                            <Fragment key={item.id}>
                                                                <button className={`offcanvas-btn ${activeIndex === item.label ? 'active' : ''} 
                                                                                                d-flex justify-content-between align-items-center`}
                                                                        onClick={() => handleOffcanvasBtn(item.label)}>
                                                                        {item.label}
                                                                    <span className="material-symbols-outlined">
                                                                        chevron_right
                                                                    </span>
                                                                </button>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div className="offcanvas-bottom mt-auto d-flex justify-content-center align-items-center">
                                                <Link to="/LoginPage" className="login-btn" onClick={()=>{onClose();}}>登入 / 註冊</Link>
                                            </div>
                                            <AnimatePresence>
                                                {/* 📄 子頁面（像「人文」） */}
                                                {activeSubPage && (   
                                                    <OffcanvasSubpagePage activeSubPage={activeSubPage} setActiveSubPage={setActiveSubPage} setActiveIndex={setActiveIndex} setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} subpageData={subpageData} setExpanded={setExpanded}/>
                                                )}
                                            </AnimatePresence>
                                    </div>
                            </motion.div>
                        </>
                    )
                )
        }
    </AnimatePresence>
  );
}

export default OffcanvasPage;
