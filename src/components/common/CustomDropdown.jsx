import { Fragment, useState } from 'react';
import './_CustomDropdown.scss';
import { Dropdown } from 'react-bootstrap';
import Card05 from './card/Card05';
import { handleGoToClassPage } from '../../slice/dataSlice';
import { useNavigate } from 'react-router-dom';




function CustomDropdown({allCardData}) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);//紀錄是否開啟視窗
  const [activeMain, setActiveMain] = useState(null);//第一層展開
  const [activeSub, setActiveSub] = useState(null);//第二層展開

  console.log("看看檔案",allCardData);

  const handleSelectEnd = (id)=>{
      setShow(false);
      setActiveMain(null);
      setActiveSub(null);
      handleGoToClassPage(allCardData,id,navigate);
  }
  

  const activeCategory = allCardData.find(item => item.label === activeMain);
  const activeSubCategory = activeCategory?.children.find(item => item.label === activeSub);


  return (
    <>
      
      <Dropdown show={show} onToggle={(isOpen) => setShow(isOpen)}>
        
        <Dropdown.Toggle as="div" className='custom-dropdown-toggle'>
          <button className="dropdown-toggle-btn" onClick={() => {setShow(!show);setActiveMain(null)}}>
            探索 <i className="material-symbols-outlined">expand_more</i>
          </button>
        </Dropdown.Toggle>
        
        <Dropdown.Menu className="dropdown-list-wrapper">
            <div className='back' onClick={() => handleSelectEnd()}></div>

            <div className="dropdown-list">
                <div className='main-menu'>
                  <button className='main-btn-top'>探索全部</button>
                  {
                    allCardData.map((option, index) => (
                      <button key={option.label} className='main-menu-item' onClick={() => {setActiveMain(option.label)}}>
                          {option.label}
                          <span class="material-symbols-outlined">
                            chevron_right
                          </span>
                      </button>
                    ))
                  }
                </div>
                

                {activeCategory && (
                  <div className="menu-column sub-menu">
                    <button className='sub-btn-top'>所有{activeMain}</button>
                    {
                      allCardData.find(item => item.label === activeMain).children.map((sub, i) => {
                          return(
                            <Fragment key={sub.label}>
                                  <button className='sub-btn' onClick={() => setActiveSub(sub.label)}>
                                    {sub.label}
                                    <span class="material-symbols-outlined">
                                      chevron_right
                                    </span>
                                  </button>
                            </Fragment>
                          )
                      })
                    }
                  </div>
                )}

                {activeSubCategory && (
                  <div className="menu-column leaf-menu">
                    <div className='leaf-top'>熱門網頁前端課程</div>
                    {
                      allCardData.find(item => item.label === activeMain).children.find(item => item.label === activeSub).children?.map((leaf, i) => {
                        return(
                          <Fragment key={i}>
                            <button className='leaf-btn' onClick={()=>{handleSelectEnd(leaf.id)}}>
                              <Card05 item={leaf.cardData}/>
                            </button>
                          </Fragment>
                        )
                      })      
                    }
                  </div>
                )}
            </div>

            

            
          
        
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default CustomDropdown;
