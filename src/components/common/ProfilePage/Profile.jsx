
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

   

    

    const profileAllClassCard = [//我的課程
        {
            title:"創意寫作工坊：從靈感到出版的全過程",
            img:"/image/course-4.png",
            user_img:"/image/user01.jpg",
            name:"Kelly Hsu",
            time:"優惠倒數 10 天",
            progress:"81%",
            score:"4.0",
            NumberOfPeople:"521",
            price:"2,480",
            origin_price:"3,200",
            stage:"正在上課中",
        },
        {
            title:"健康廚房：營養均衡的素食料理指南",
            img:"/image/course-1.png",
            user_img:"/image/user02.jpg",
            name:"希姐帶你吃",
            time:"優惠倒數 17 天",
            progress:"281%",
            score:"4.8",
            NumberOfPeople:"1,397 ",
            price:"1,680",
            origin_price:"2,980",
            stage:"已完課",
        },
        {
            title:"音樂製作入門：從零開始創作你的音樂",
            img:"/image/course-2.png",
            user_img:"/image/user03.jpg",
            name:"K.Dee",
            time:"優惠倒數 9 天",
            progress:"76%",
            score:"4.3",
            NumberOfPeople:"420",
            price:"2,680",
            origin_price:"3,200",
            stage:"已完課",
        },
        {
            title:"掌握商業攝影：打造你的專業攝影事業",
            img:"/image/course-3.png",
            user_img:"/image/user04.jpg",
            name:"Mikeeee",
            time:"優惠倒數 1 天",
            progress:"98%",
            score:"4.6",
            NumberOfPeople:"290",
            price:"1,980",
            origin_price:"3,200",
            stage:"等待開課",
        },
    ]

    const profileFavorites = [//我的收藏
        {
            title: "攝影眼的養成：從日常到藝術的轉化",
            img: "/image/course-5.png",
            user_img: "/image/user05.jpg",
            name: "Ray Chang",
            time: "優惠倒數 3 天",
            progress: "54%",
            score: "4.7",
            NumberOfPeople: "1,021",
            price: "1,580",
            origin_price: "2,300",
        },
        {
            title: "繪畫基礎訓練：素描與色彩的藝術探索",
            img: "/image/course-6.png",
            user_img: "/image/user06.jpg",
            name: "彩虹老師",
            time: "優惠倒數 5 天",
            progress: "109%",
            score: "4.9",
            NumberOfPeople: "763",
            price: "2,200",
            origin_price: "3,000",
        }
    ];

    const profileWorks = [//作品成果
        {
            title: "作品集：數位插畫創作",
            img: "/image/work-1.jpg",
            user_img: "/image/user01.jpg",
            name: "Kelly Hsu",
            time: "創作於 2024/11",
            progress: "100%",
            score: "4.9",
            NumberOfPeople: "152",
            price: "免費",
            origin_price: "免費",
        },
        {
            title: "作品集：城市攝影選輯",
            img: "/image/work-2.jpg",
            user_img: "/image/user04.jpg",
            name: "Mikeeee",
            time: "創作於 2025/01",
            progress: "100%",
            score: "4.8",
            NumberOfPeople: "234",
            price: "免費",
            origin_price: "免費",
        },
        {
            title: "作品集：創意短影片剪輯",
            img: "/image/work-3.jpg",
            user_img: "/image/user03.jpg",
            name: "K.Dee",
            time: "創作於 2024/12",
            progress: "100%",
            score: "4.6",
            NumberOfPeople: "310",
            price: "免費",
            origin_price: "免費",
        },
        {
            title: "作品集：文案寫作集錦",
            img: "/image/work-4.jpg",
            user_img: "/image/user07.jpg",
            name: "Rita",
            time: "創作於 2023/09",
            progress: "100%",
            score: "4.5",
            NumberOfPeople: "118",
            price: "免費",
            origin_price: "免費",
        },
        {
            title: "作品集：UI 設計樣式與流程展示",
            img: "/image/work-5.jpg",
            user_img: "/image/user08.jpg",
            name: "設計犬",
            time: "創作於 2025/02",
            progress: "100%",
            score: "5.0",
            NumberOfPeople: "428",
            price: "免費",
            origin_price: "免費",
        }
    ];

    const w_profileAllClassCard = [...profileAllClassCard, ...profileAllClassCard];

    

    const profileTabs = [
        {   id: 1, label: '我的課程', icon: 'folder', class: "class",
            profileIn:{
                Tabs:[
                    { id: 1, label: '所有課程', key: 'all' },
                    { id: 2, label: '正在上課中', key: 'online' },
                    { id: 3, label: '等待開課', key: 'waiting' },
                    { id: 4, label: '已完課', key: 'finish' },
                ],
                content:w_profileAllClassCard,
                trueContentNum:profileAllClassCard,
            }
                
        },
        { id: 2, label: '我的收藏', icon: 'bookmark', class: "collect",
            profileIn:{
                Tabs:[
                    { id: 1, label: '所有收藏', key: 'all' },
                ],
                content:profileFavorites,
                trueContentNum:profileFavorites,
            }
        },
        { id: 3, label: '作品成果', icon: 'folder', class: "result",
            profileIn:{
                Tabs:[
                    { id: 1, label: '所有作品', key: 'all' },
                ],
                content:profileWorks,
                trueContentNum:profileWorks,
            }
        },
    ];

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
