import { Fragment, useState } from 'react';
import './_IconDropdown.scss';
import { Dropdown } from 'react-bootstrap';






function IconDropdown() {
  const [show, setShow] = useState(false);//紀錄是否開啟視窗
  const [activeMain, setActiveMain] = useState(null);//第一層展開

  const handleSelectEnd = ()=>{
      // setActiveThird(null);
      setShow(false);
      setActiveMain(null);
  }

  const messages = [
    {
        id:1,
        icon:"/image/icons/ic_campaign02.png",
        message:"系統通知：6 月 30 日 02:00 網站系統排程更新",
        time:"4天前",
    },
    {
        id:2,
        icon:"/image/icons/ic_notifications02.png",
        message:"募資開課：您購買的募資課程已成功開課！將於 3 天後公布課綱！",
        time:"7 天前",
    },
    {
        id:3,
        icon:"/image/icons/ic_notifications02.png",
        message:"募資開課：您購買的募資課程已成功開課！將於 3 天後公布課綱！",
        time:"7 天前",
    },
    {
        id:4,
        icon:"/image/icons/ic_campaign02.png",
        message:"系統通知：6 月 30 日 02:00 網站系統排程更新",
        time:"4天前",
    },
  ]

  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
        
        <Dropdown.Toggle as="div" className='icon-dropdown-toggle'>
            <button className='icon-title-btn'>
                <span className="material-symbols-outlined notifications-icon position-relative">
                    notifications
                    <span className="position-absolute navbar-icon-mark mark-14"></span>
                </span>
            </button>
        </Dropdown.Toggle>
        
        <Dropdown.Menu className="dropdown-list-wrapper">
            {/* <div className='back' onClick={() => handleSelectEnd()}></div> */}

            <div className="icondropdown-list">
                <div className='main-header'>
                    <button className='header-btn' onClick={()=>{handleSelectEnd()}}>
                        <span class="material-symbols-outlined small-icon">
                            check_small
                        </span>
                        全部標記為已讀
                    </button>
                </div>
                <div className='main-menu'>
                    {
                        messages.map((item)=>{
                            return(
                                <>
                                    <div key={item.id} className='main-item'>
                                        <div className={`main-img-container ${item.icon === "/image/icons/ic_notifications02.png" ?("plus"):(null)}`}>
                                            <img className='main-img' src={item.icon} alt="" />
                                        </div>
                                        <div className='main-text-container'>
                                            <p className='main-tip'>{item.message}</p>
                                            <p className='main-time'>{item.time}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div> 
            </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default IconDropdown;
