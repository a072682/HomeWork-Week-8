import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // 取得目前路由的路徑

  useEffect(() => {
    window.scrollTo(0, 0); // 捲動到頁面頂部
  }, [pathname]); // 每次 pathname 改變就執行一次

  return null; // 這個元件不需要畫面上顯示任何東西
}

export default ScrollToTop;
