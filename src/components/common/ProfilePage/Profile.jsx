
import './_Profile.scss';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Card04 from '../card/Card04';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfileDataItems } from '../../../slice/dataSlice';




function Profile() {

    const navigate = useNavigate();

    const dispatch = useDispatch();//使用中央函式

    const allData = useSelector((state) => state.data.defaultClassData);
    
    const { id_name } = useParams();
    

    const userData = useSelector((state) => state.user.currentUserData);

    const [newUserData,setNewUserData] = useState([]);
    //新使用者資料矩陣

    const [inClassData,setInClassData] = useState([]);
    //正在上課矩陣


    const handleNewUserData = (input) => {
        if (!userData?.classes) return [];
        const nameMap = {
            InClass: "正在上課中",
            Waiting: "等待開課",
            finish: "已完課",
        };

        // 1️⃣ 先處理原本的三組課程分類（轉成陣列）
        const classArray = Object.entries(userData.classes).map(([key, value]) => ({
            key,
            value,
            name: nameMap[key] || key,
        }));

        // 2️⃣ 將所有課程整合成 AllClasses
        const AllClasses = classArray.flatMap((item) => item.value);

        // 3️⃣ 建立新的 classes 結構，先加 AllClasses，再接原本的分類
        const content01 = [
            {
                key: "AllClasses",
                value: AllClasses,
                name: "所有課程",
            },
            ...classArray,
        ];
        const newcontent01 = content01.map((category) => {
            
            const mergedValue = category.value.map((item) => {
                const fullDetail = input.find((d) => d.id === item.id);
                return fullDetail ? { ...item, ...fullDetail } : item;
            });

            return {
                ...category,
                value: mergedValue,
            };
        });

        const content02 = [
            {
                key:"MyCollection",
                value: [],
                name: "我的收藏",
            },
        ];

        const content03 = [
            {
                key:"MyPortfolio",
                value: [],
                name: "作品集",
            },
        ];


        // 4️⃣ 回傳新的 userData 結構
        const newUserData = {
            id:userData.id,
            name:userData.name,
            email:userData.email,
            password:userData.password,
            userFile:[
                {
                    key:"Class",
                    name:"我的課程",
                    icon:'folder',
                    class: "class",
                    content: newcontent01,
                }, 
                {
                    key:"Collection",
                    name:"我的收藏",
                    icon:'bookmark',
                    class: "class",
                    content: content02
                }, 
                {
                    key:"Portfolio",
                    name:"作品集",
                    icon:'folder',
                    class: "result",
                    content: content03
                },   
                {
                    key:"ShoppingCart",
                    name:"購物車",
                    content: { ...userData.shoppingCart }
                }, 
            ],
        };
        return newUserData;
    };

    useEffect(()=>{
        console.log("proData:",userData);
        console.log("proAllData:",allData);
        if(userData && allData){
            console.log("取得userData和allData");
        }else{
            console.log("沒取得userData和allData");
        }
        const result = getProfileDataItems(allData,userData);
        setInClassData(result);
        const result02 = handleNewUserData(result);
        if(result02){
            setNewUserData(result02);
        }
        
        console.log("正在上課資料:",result);
        console.log("新使用者資料:",result02);
    },[userData,allData]);


    const [profileTabShow, setProfileTabShow] = useState('我的課程');//最外圍tab控制 只有true和false Tab.Container專用

    const [profileItem, setProfileItem] = useState('所有課程');//item控制 Tab.Container專用

    const [profileTab, setProfileTab] = useState('我的課程');//tab控制

    const [profileInTab, setProfileInTab] = useState("所有課程");//tab控制

    useEffect(() => {
        const contentName =newUserData?.userFile?.slice(0, 3).find(item => item.name === profileTab)?.content?.[0]?.name;
        if(contentName){
            setProfileInTab(contentName);
        }
    }, [newUserData,profileTab]);

    useEffect(()=>{
        console.log("tab",profileTab);
    },[profileTab]);

    useEffect(()=>{
        console.log("次要tab",profileInTab);
    },[profileInTab]);

    const tabContent = newUserData?.userFile?.slice(0, 3).find(item => item.name === profileTab)?.content;
    useEffect(()=>{
        console.log("tabContent",tabContent);
    },[tabContent]);



    


    

  return (
    <div className='ProfilePage'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="ProfilePage-bg">
                         <Tab.Container activeKey={profileTabShow} onSelect={(key) => setProfileTabShow(key)}>
                            <div className='ProfilePage-intro'>
                                <div className='hrader-container'>
                                    <img className='d-none d-lg-block' src="/image/avatar-1.png" alt="" />
                                    <div className='name-tag-container'>
                                        <div className='name-container'>
                                            <img className='name-img d-lg-none' src="/image/avatar-1.png" alt="" />
                                            <p className='name'>Jessica</p>
                                        </div>
                                        <div className='tag-container'>
                                            
                                                <Nav className='class-nav'>
                                                    {/* 渲染我的課程,我的收藏,作品成果TAB按鈕 */}
                                                {
                                                    newUserData?.userFile?.slice(0, 3).map((tab)=>{
                                                        return(
                                                            <Fragment key={tab.key}>
                                                                <Nav.Item  className="class-nav-item">
                                                                    <Nav.Link className="tag-item-container" eventKey={tab.name} onClick={() => setProfileTab(tab.name)}>
                                                                        <span className="material-symbols-outlined tag-icon">{tab.icon}</span>
                                                                        <p className='tag-text'>{tab.name}</p>
                                                                    </Nav.Link>
                                                                </Nav.Item>
                                                            </Fragment>
                                                        )
                                                    })
                                                }
                                                </Nav>
                                        </div>
                                    </div>
                                </div>
                                <div className='my-class'>
                                    <div className='class-itam-container'>
                                        {/* 渲染右側我的課程,我的收藏,作品成果 */}
                                        {
                                            newUserData?.userFile?.slice(0, 3).map((item)=>{
                                                return(
                                                    <div key={item.name} className={item.class}>
                                                        <p className='text'>{item.name}</p>
                                                        <p className='num'>
                                                            {
                                                                item?.content?.slice(0, 1).map((itemIn)=>itemIn.value.length)
                                                            }
                                                        </p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='ProfilePage-class'>
                                <div className='content-container'>
                                    <Tab.Content className='class-tab-content'>
                                        {/* 顯示我的課程,我的收藏,作品成果區塊 */}
                                        {
                                            newUserData?.userFile?.slice(0, 3).map((item)=>{
                                                return(
                                                    <Fragment key={item.key}>
                                                        <Tab.Pane eventKey={item.name}>
                                                            <Tab.Container activeKey={profileItem} onSelect={(key) => setProfileItem(key)}>
                                                                <Nav className='class-nav'>
                                                                    {/* 顯示我的課程內部的TAG:所有課程等等 */}
                                                                    {
                                                                        item?.content?.map((tabItem) => 
                                                                            (
                                                                            <Fragment key={tabItem.key}>
                                                                                <Nav.Item onClick={() => setProfileInTab(tabItem.name)} className="class-nav-item">
                                                                                    <Nav.Link   className="nav-link" eventKey={tabItem.name}>
                                                                                        {tabItem.name}
                                                                                    
                                                                                        {
                                                                                            tabItem.name === profileInTab &&
                                                                                            (
                                                                                                <>
                                                                                                    {' '}
                                                                                                    {/* 這是插入空白的意思 */}
                                                                                                    (
                                                                                                        {
                                                                                                            tabItem.value.length
                                                                                                        }
                                                                                                    )
                                                                                                </>
                                                                                                
                                                                                            )
                                                                                        }
                                                                                    
                                                                                    </Nav.Link>
                                                                                </Nav.Item>
                                                                            </Fragment>
                                                                        ))
                                                                    }
                                                                </Nav>
                                                                <Tab.Content className='class-card-content'>
                                                                    {/* 顯示我的課程內部的內容:所有課程的內容等等 */}
                                                                    {   
                                                                        
                                                                        item?.content?.map((contentItem) =>{
                                                                            return(
                                                                                <Fragment key={contentItem.key}>
                                                                                    <Tab.Pane eventKey={contentItem.name}>
                                                                                        <div className='class-cardgroups'>
                                                                                            <Swiper
                                                                                                className=''
                                                                                                modules={[]}
                                                                                                slidesPerView={1}
                                                                                                loop={true}
                                                                                                spaceBetween={8}
                                                                                                breakpoints={{
                                                                                                    768: {
                                                                                                    spaceBetween: 8,
                                                                                                    slidesPerView: 2,
                                                                                                    },
                                                                                                    992: {
                                                                                                    spaceBetween: 16,
                                                                                                    slidesPerView: 3,
                                                                                                    },
                                                                                                    1200: {
                                                                                                    spaceBetween: 24,
                                                                                                    slidesPerView: 4,
                                                                                                    },
                                                                                                }}
                                                                                                > 
                                                                                                {
                                                                                                    contentItem?.value.map((valueItem)=>{
                                                                                                        return(
                                                                                                            <SwiperSlide key={valueItem.id}>
                                                                                                                <Card04 item={valueItem} />
                                                                                                            </SwiperSlide>
                                                                                                        )
                                                                                                    })
                                                                                                }
                                                                                            </Swiper>
                                                                                        </div>  
                                                                                    </Tab.Pane>
                                                                                </Fragment>
                                                                            )
                                                                        })
                                                                    }
                                                                </Tab.Content>
                                                            </Tab.Container>
                                                        </Tab.Pane>
                                                    </Fragment>
                                                )
                                            })
                                        }
                                    </Tab.Content>
                                </div> 
                            </div>
                        </Tab.Container>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Profile;
