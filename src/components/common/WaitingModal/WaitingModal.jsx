
import { useEffect } from 'react';
import WaitingAnimation from '../WaitingAnimation/WaitingAnimation';
import './_WaitingModal.scss';
import { useNavigate } from 'react-router-dom';

export default function WaitingModal({open,setOpen,id_name}) {

  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (open) {
      // 開啟 modal 後 3 秒導向首頁
      timer = setTimeout(() => {
        navigate(`/OrderPage3/${id_name}`);
      }, 3000);
    }
    return () => {
      clearTimeout(timer); // 清除計時器避免記憶體洩漏
    };
  }, [open, navigate]);
  
  return (
    <div className="container mt-5 text-center">
      {open && (
        // 🛑 取消 onClick 觸發背景關閉
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <WaitingAnimation />
            <img className='modal-img' src={`${import.meta.env.BASE_URL}image/logo.png`} alt="" />
            <p className='modal-text'>正在處理您的訂單</p>
            {/* <button className="btn btn-dark" onClick={() => setOpen(false)}>關閉</button> */}
          </div>
        </div>
      )}
    </div>
  );
}
