
import { useEffect } from 'react';
import './_OffcanvasSubpagePage.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { handleGoToCoursePage03 } from '../../slice/dataSlice';


function OffcanvasSubpagePage({ activeSubPage, setActiveSubPage, isLoggedIn, subpageData, setActiveIndex, setActiveTab, setExpanded }) {

    const navigate = useNavigate();//頁面跳轉宣告

    const allData = useSelector((state) => state.data.defaultClassData);
  

    useEffect(()=>{
        console.log("目前登入狀態:",isLoggedIn);
        console.log("看看取得的資料:",subpageData);
        console.log("所有資料:",allData);
    },[isLoggedIn,subpageData,allData]);

    const handleGoToCoursePageBtn = (id)=>{
            setActiveSubPage(null);
            setExpanded(false);
            setActiveIndex("探索全部");
            setActiveTab('explore');
            handleGoToCoursePage03(allData,id,navigate);
    }

  return (
    <AnimatePresence>
            <>
                {/* 📄 子頁面（像「人文」） */}
                <motion.div
                    key={activeSubPage}//KEY一改變 就會先執行exit 在執行initial + animate
                    className={`offcanvas-subpage ${isLoggedIn?(""):("h-full")}`}
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'tween', duration: 0.3 }}
                >
                    {/* ⬅️ 上一頁標題列 */}
                    <div className="subpage-box px-24 py-16 d-flex flex-column row-gap-8">
                        <div className="subpage-header border border-1 d-flex align-items-center px-24 py-12 border-bottom">
                            <span
                                className="material-symbols-outlined me-2"
                                onClick={() => setActiveSubPage(null)}
                                role="button"
                            >
                                chevron_left
                            </span>
                            <h5 className="fw-400 fs-16 lh-15 poppins mx-auto">所有{activeSubPage}</h5>
                        </div>

                        {/* 🧠 子項目內容（例：哲學、文學...） */}
                        <div className="subpage-body d-flex flex-column">
                            {
                                subpageData.map((item) => (
                                    <button key={item.id} className="subpage-btn" onClick={()=>{handleGoToCoursePageBtn(item.id)}}>
                                        <span className='fw-400 fs-16 lh-15 poppins'>{item.label}</span>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                </motion.div>
            </>
    </AnimatePresence>
  );
}

export default OffcanvasSubpagePage;
