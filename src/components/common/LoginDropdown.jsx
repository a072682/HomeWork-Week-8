import { Fragment, useState } from 'react';
import './_LoginDropdown.scss';
import { Dropdown } from 'react-bootstrap';






function LoginDropdown({handleLogout,navigate,userData}) {
  const [show, setShow] = useState(false);//紀錄是否開啟視窗
  

  const handleLogoutDefault_dk = ()=>{
      setShow(false);
  }

  const LoginItem = [
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

  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
        
        <Dropdown.Toggle as="div" className='icon-dropdown-toggle'>
            <button className='border-0 p-0 d-flex d-flex justify-content-center align-items-center bg-ffffff'>  
                <div className='navbar-dk-login-img-box'>
                    <img className='img-set' src={`${import.meta.env.BASE_URL}/image/avatar-1.png`} alt="" />
                </div>
                <p className='fw-600 fs-16 lh-15 col-000000 '>Jessica</p> 
            </button>
        </Dropdown.Toggle>
        
        <Dropdown.Menu className="dropdown-list-wrapper">
            

            <div className="icondropdown-list">                                        
                <div className="icon-header">
                    <div className='icon-img-container'>
                        <img className='icpn-img' src={`${import.meta.env.BASE_URL}image/avatar-1.png`} alt="" />
                    </div>
                    <div className='icon-text-container'>
                        <p className='fw-600 fs-16 lh-15 col-000000 poppins'>Jessica</p>
                        <p className='fw-400 fs-14 lh-15 col-4b4b4b poppins'>學習初心者</p>
                    </div>
                </div>

                <div className="member-body mt-16 pb-15">
                    {
                        LoginItem.slice(0, 3).map((item,index)=>{
                            return(
                                <Fragment key={index}>
                                    <button className='d-flex gap-8 py-12 px-24 border-0 bg-ffffff' 
                                            onClick={()=>{navigate(`/ProfilePage/${userData.name}`);handleLogoutDefault_dk()}}>
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
                        LoginItem.slice(3, 5).map((item,index)=>{
                            return(
                                <Fragment  key={index}>
                                    <button className='d-flex gap-8 py-12 px-24 border-0 bg-ffffff'
                                            onClick={()=>{navigate(`/ProfilePage/${userData.name}`);handleLogoutDefault_dk();}}>
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
                            onClick={(event)=>{handleLogout(event);handleLogoutDefault_dk();}}>
                        <span className="material-symbols-outlined col-4b4b4b">
                            logout
                        </span>
                        <p className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>登出</p>
                    </button>
                </div> 
            </div>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default LoginDropdown;
