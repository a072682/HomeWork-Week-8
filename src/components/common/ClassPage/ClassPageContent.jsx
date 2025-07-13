import { useNavigate } from 'react-router-dom';
import './_ClassPageContent.scss';
import ReactBsAccordion from '../ReactBsAccordion';
import { Fragment, useEffect, useRef, useState } from 'react';
import CommentSystem from '../CommentSystem/CommentSystem';
import ReactPagination from '../ReactPagination';
import { useDispatch, useSelector } from 'react-redux';
import { handleGoToTeacherPage, handleShoppingCartData, handleTeacherALLDate, handleTeacherCommentsALLDate, handleTeacherNumALLDate } from '../../../slice/dataSlice';
import { updateCart } from '../../../slice/userSlice';




function ClassPageContent ({classPageAllData,userData}){

    const navigate = useNavigate();

    const dispatch = useDispatch();//使用中央函式

    const allData = useSelector((state) => state.data.defaultClassData);

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });


    const ClassTag = ["課程介紹","預計單元","關於講師","購課前問答",];

    const [tag,setTag] = useState("課程介紹");

    const[accordionAllTime,setAccordionAllTime] = useState(null);

    const handleTeacherClassAllTime = (input)=>{
        let totalSeconds = 0;
        input[0]?.classData?.classAccordion?.map((first)=>{
            first.bodycontent.map((second)=>{
                if(second.duration){
                    const [min, sec] = second.duration.split(':').map(Number); // "03:00" → [3, 0]
                    totalSeconds += min * 60 + sec;
                }
            })
        })

        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        return `${hours} 小時 ${minutes} 分鐘`;
    }

    const[accordionAllUnit,setAccordionAllUnit] = useState(null);

    const handleAccordionAllUnit = (input)=>{
        const result = [];
        input[0]?.classData?.classAccordion?.map((first)=>{
            first.bodycontent.map((second)=>{
                if(second){
                    result.push(second);
                }
            });
        });
        return result;
    }

    const teacherName = classPageAllData[0]?.classData?.teacher?.teacherName;
    const [teacherAllData,setTeacherAllData]=useState(null);//老師課程數量

    const[teacherClassAllNumData,setTeacherClassAllNumData]=useState(null);//老師課程總人數加總

    const[teacherClassAllCommentsData,setTeacherClassAllCommentsData]=useState(null);//老師課程總評論加總

    const[shoppingCartData,setShoppingCartData] = useState(null);

    // const DataIn = {
    //     email:userData?.email,
    //     cartItem:shoppingCartData,
    // }

    const handleShoppingCartDataIn = ()=>{
        console.log("準備輸入的資料:",shoppingCartData);
        dispatch(updateCart({
            email:userData?.email,
            cartItem:shoppingCartData,
        }));
        navigate(`/OrderPage/${userData.id}`);
    }

    useEffect(()=>{
        console.log("引入資料02:",classPageAllData);
        console.log("目前登入狀態:",isLoggedIn);
        const result = handleTeacherClassAllTime(classPageAllData);
        const result02 = handleAccordionAllUnit(classPageAllData);
        const result03 = handleTeacherALLDate(allData,teacherName);
        const result04 = handleTeacherNumALLDate(result03);
        const result05 = handleTeacherCommentsALLDate(result03);
        const result06 = handleShoppingCartData(classPageAllData);
        setAccordionAllTime(result);
        setAccordionAllUnit(result02);
        setTeacherAllData(result03);
        setTeacherClassAllNumData(result04);
        setTeacherClassAllCommentsData(result05);
        setShoppingCartData(result06);
        console.log("統計時間:",result);
        console.log("老師課程數量:",result03);
        console.log("老師課程總人數加總:",result04);
        console.log("老師課程總評論加總:",result05);
        console.log("購物車物件:",result06);
    },[classPageAllData,isLoggedIn])

    const [expandAll, setExpandAll] = useState(false); // 🌟 狀態：控制是否展開全部

    const classIntroRef = useRef(null);
    const classAccordionRef = useRef(null);
    const teacherRef = useRef(null);
    const commentRef = useRef(null);

    const scrollToSection = (tagName) => {
        const sectionMap = {
            "課程介紹": classIntroRef,
            "預計單元": classAccordionRef,
            "關於講師": teacherRef,
            "購課前問答": commentRef,
        };

        const targetRef = sectionMap[tagName];
        if (targetRef?.current) {
            const topOffset = targetRef.current.getBoundingClientRect().top + window.pageYOffset;
            const offsetY = topOffset - 300; // ⬅️ 向上偏移 200px，避免被 Header 擋住

            window.scrollTo({
                top: offsetY,
                behavior: 'smooth',
            });
        }
    };


    return(
        <>
            <div className='ClassPageContent'>
                <div className="container">
                    <div className='ClassPageContent-bg'>
                        <div className="row">
                            <div className="col-12">
                                <div className='Content-tag'>
                                    {
                                        ClassTag?.map((item)=>{
                                            return(
                                                <button className={`tag border-0 ${tag === item?("active"):(null)}`} value={item} 
                                                        onClick={()=>{setTag(item);scrollToSection(item);}}>
                                                    {item}
                                                    <div className='tag-boder'></div>
                                                </button>
                                            )
                                        })
                                    }
                                </div>
                                <div className="row">
                                    <div className="col-12 col-lg-8">
                                        <div className='Content-box'>
                                            <div className='Content-content' ref={classIntroRef}>
                                                <div className='Content-title'>
                                                    <img src="/image/deco/flower-5.png" alt="" />
                                                    <h2>課程介紹</h2>
                                                </div>
                                                {
                                                    isLoggedIn?
                                                    (
                                                        <div className='Content-body'>
                                                            {
                                                                classPageAllData[0]?.classData?.classContent?.map((item,index)=>{
                                                                    return(
                                                                        <Fragment key={index}>
                                                                            <picture>
                                                                                <source srcset={item.classImgfirts} media="(min-width: 1200px)" />
                                                                                <img src={item.classImgsecond} alt="課程圖片" />
                                                                            </picture>
                                                                            <div className='text-container'>
                                                                                <h3>
                                                                                    {item.classTitle}
                                                                                    <div className='h3-boder'></div>
                                                                                </h3>
                                                                                <p>{item.classContent}</p>
                                                                            </div>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    )
                                                    :
                                                    (
                                                        <div className='Content-body classData'>
                                                            {
                                                                classPageAllData[0]?.classData?.classContent?.map((item,index)=>{
                                                                    return(
                                                                        <Fragment key={index}>
                                                                            <picture>
                                                                                <source srcset={item.classImgfirts} media="(min-width: 1200px)" />
                                                                                <img src={item.classImgsecond} alt="課程圖片" />
                                                                            </picture>
                                                                            <div className='text-container'>
                                                                                <h3>
                                                                                    {item.classTitle}
                                                                                    <div className='h3-boder'></div>
                                                                                </h3>
                                                                                <p>{item.classContent}</p>
                                                                            </div>
                                                                        </Fragment>
                                                                    )
                                                                })
                                                            }
                                                            <div className='mask'>
                                                                <button type="button" onClick={()=>{navigate("/LoginPage");}}>
                                                                    <p>展開更多</p>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }
                                                
                                            </div>

                                            <div className='Content-content2' ref={classAccordionRef}>
                                                <div className='Content-title'>
                                                    <div className='Subtitle-container'>
                                                        <div className='Caption-container'>
                                                            <img src="/image/deco/flower-5.png" alt="" />
                                                            <h2>預計單元</h2>
                                                        </div>
                                                        <p>{classPageAllData[0]?.classData?.classAccordion?.length} 章 {accordionAllUnit?.length} 單元｜總時長 {accordionAllTime} 分鐘</p>
                                                    </div>
                                                    <div className='title-btn'>
                                                        <button onClick={() => setExpandAll((prev) => !prev)}>
                                                            <p>{expandAll ? '全部收合' : '全部展開'}</p>
                                                        </button>
                                                    </div>  
                                                </div>
                                                <div className='Content-body'>
                                                    <ReactBsAccordion expandAll={expandAll} classPageAllData={classPageAllData}/>
                                                </div>
                                            </div>

                                            <div className='Content-content3' ref={teacherRef}>
                                                <div className='Content-title'>
                                                    <img src="/image/deco/flower-5.png" alt="" />
                                                    <h2>關於講師</h2>
                                                </div>
                                                <div className='Content-body'>
                                                    <div className='title-container'>
                                                        <div className='Subtitle-container'>
                                                            <img src={classPageAllData[0]?.classData?.teacher?.teacherImg} alt="" />
                                                            <div className='text-container'>
                                                                <h3>{classPageAllData[0]?.classData?.teacher?.teacherName}</h3>
                                                                <p>{classPageAllData[0]?.classData?.teacher?.teacherCaption02}</p>
                                                            </div>
                                                        </div>
                                                        <div className='Score-container'>
                                                            <p className='Class'>{teacherAllData?.length} 堂課程</p>
                                                            <p className='Student'>{teacherClassAllNumData} 個學生</p>
                                                            <p className='Score'>{teacherClassAllCommentsData} 則評論</p>
                                                        </div>
                                                    </div>

                                                    <hr className='Content-hr'/>
                                                    
                                                    <div className='Content-container'>
                                                        <p>六角學院是一所線上程式開發學習單位，目前已累積 20,000 名學員，讓更多人藉由線上學習在職涯規劃上有更多的選擇是我們的使命是，如果您贊同我們的理念，歡迎加入六角。</p>
                                                        <p>我們將深入了解您想發展的領域，每位實習生我們都會量身打造專屬於您的舞台，並讓您實際瞭解公司營運 Know how。</p>
                                                    </div>
                                                    <div className='Resume-container'>
                                                        <button className='border-0 p-0 bg-ffffff' onClick={()=>{handleGoToTeacherPage(allData,classPageAllData[0]?.id,navigate)}}>
                                                            了解更多講師履歷
                                                            <span class="material-symbols-outlined">
                                                                arrow_forward_ios
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='Content-content4' ref={commentRef}>
                                                <div className='Content-title'>
                                                    <img src="/image/deco/flower-5.png" alt="" />
                                                    <h2>購課前問答</h2>
                                                </div>
                                                <CommentSystem />
                                            </div>
                                        </div>
                                        
                                    </div>
                                    <div className="d-none d-lg-block col-lg-4">
                                        <div className='Checkout'>
                                            <p className='buy'>購買本堂課</p>
                                            <p className='discount'>限定優惠 75 折</p>
                                            <p className='price'>NT$ {classPageAllData[0]?.cardData?.price}<del className='origin_price'>NT$ {classPageAllData[0]?.cardData?.origin_price}</del></p>
                                            <p className='people'>{classPageAllData[0]?.classData?.NumberOfPeople} 人已註冊</p>
                                            {
                                                isLoggedIn?
                                                (
                                                    <div className='btn'>
                                                        <button type="button" onClick={()=>{handleShoppingCartDataIn();}}>立即購買</button>
                                                        <span class="material-symbols-outlined cart-icon">
                                                            shopping_cart
                                                        </span>
                                                    </div>
                                                )
                                                :
                                                (
                                                    <div className='btn'>
                                                        <button type="button" onClick={()=>{navigate("/LoginPage");}}>立即購買</button>
                                                        <span class="material-symbols-outlined cart-icon" onClick={()=>{navigate("/LoginPage");}}>
                                                            shopping_cart
                                                        </span>
                                                    </div>
                                                )
                                            }   
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className='Checkout-mb d-lg-none'>
                        <div className='text'>
                            <p className='price'>NT$ {classPageAllData[0]?.cardData?.price}</p>
                            <p className='people'>{classPageAllData[0]?.classData?.NumberOfPeople} 人已註冊</p>
                        </div>
                        {
                            isLoggedIn?
                            (
                                <div className='btn'>
                                    <span class="material-symbols-outlined cart-icon">
                                        shopping_cart
                                    </span>
                                    <button type="button" onClick={()=>{handleShoppingCartDataIn();}}>
                                        立即購買
                                    </button>
                                </div>
                            )
                            :
                            (
                                <div className='btn'>
                                    <span class="material-symbols-outlined cart-icon" onClick={()=>{navigate("/LoginPage");}}>
                                        shopping_cart
                                    </span>
                                    <button type="button" onClick={()=>{navigate("/LoginPage");}}>立即購買</button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default ClassPageContent; 