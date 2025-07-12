import { div } from 'framer-motion/client';
import React, { useState } from 'react';
import './_CommentSystem.scss';
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { addCommentToCourse } from '../../../slice/dataSlice';


function CommentSystem() {

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    const isLoggedIn = useSelector((state) => {//讀取中央資料
        return(
            state.auth.isLoggedIn
        )
    });

    const allData = useSelector((state) => state.data.defaultClassData);//取得所有資料
    
    const { id_first, id_third } = useParams();//取得判斷用id

    const course = allData//取得對應的矩陣物件
    .find(first => first.id === id_first)?.children
    .flatMap(second => second.children || [])
    .find(third => third.id === id_third);

  const [comment, setComment] = useState('');//顯示留言的狀態
  const commentsList = course?.comments || [];//課程的留言區

  // 假設固定使用者資料
  const user = {
    name: 'Andy',
    avatar: `https://i.pravatar.cc/40?img=5`, // 隨機頭像 (固定 id=5)
  };

  const answer = {
    title:"六角學院",
    teacher:"授課老師",
    text:"嗨嗨 Brian我是六角學院助教 Bingbingboom關於同學的問題：1. 使用 Windows 系統是可以的，沒有問題哩2. 課程內容都是相同的哦～若有問題歡迎再次發問 :D"
  }

  // 處理送出留言
  const handleSubmit = () => {
    if (comment.trim() === '') return;

    const newComment = {
      id: Date.now(),
      name: user.name,
      avatar: user.avatar,
      text: comment,
      timestamp: new Date().toLocaleString(),
    };

    // Redux 儲存
    dispatch(addCommentToCourse({ courseId: id_third, newComment }));
    setComment(''); // 清空輸入欄
  };

  return (
    <div className='Comment'>
      {
        isLoggedIn ? 
        (
            // {/* 留言輸入區 */}
            <div className='Comment-container'>
                <div className='avatar d-lg-none'>
                    <img className='img' src={user.avatar} alt="avatar"/>
                    <div className='user'>{user.name}</div>
                </div>

                <div className='avatar-dk d-none d-lg-flex'>
                    <img className='dk-img' src={user.avatar} alt="avatar"/>
                    <div className="dk-avatar-box d-none d-lg-block">
                        <div className='dk-user'>{user.name}</div>
                        <textarea className='dk-textarea' value={comment} onChange={(e) => setComment(e.target.value)} placeholder="上課前有什麼疑問嗎？ 在這裡盡情詢問講師！"></textarea>
                        <div className='dk-btn-container'>
                            <div className='dk-Caption'>
                                <img src="/image/deco/flower-5.png" alt="" />
                                <p>提問之前也別忘了看看其他同學有沒有跟你有相同的問題哦</p>
                            </div>
                            
                            <button onClick={handleSubmit}>
                                送出
                            </button>
                        </div>
                    </div>
                </div>
                
                <textarea className='textarea d-lg-none' value={comment} onChange={(e) => setComment(e.target.value)} placeholder="上課前有什麼疑問嗎？ 在這裡盡情詢問講師！"></textarea>
                
                <div className='btn-container d-lg-none'>
                    <div className='Caption'>
                        <img src="/image/deco/flower-5.png" alt="" />
                        <p>提問之前也別忘了看看其他同學有沒有跟你有相同的問題哦</p>
                    </div>
                    
                    <button onClick={handleSubmit}>
                        送出
                    </button>
                </div>
            </div>
        )
        :
        (
            <div className='logout-container'>
                <div className='Caption'>
                    <img src="/image/deco/flower-5.png" alt="" />
                    <p>登入講師才會知道你是誰哦，立即登入詢問</p>
                </div>
                
                <button onClick={()=>{navigate("/LoginPage");}}>
                    登入
                </button>
            </div>
        )
      }  
        {/* 留言列表 */}
        <div className='Comment-List'>
            {commentsList.map((item) => (
                <div className='List-container' key={item.id}>
                    <div className='avatar'>
                        <img className='img' src={item.avatar} alt="avatar"/>
                        <div className='user'>
                            <div className='name'>{item.name}</div>
                            <time className='time' datetime={item.timestamp}>{item.timestamp}</time>
                        </div>
                    </div>
                    
                    <div className='comment'>
                        {item.text}
                    </div>

                    <div className='answer'>
                        <div className='Caption'>
                            <div className='title-container'>
                                <p className='title'>{answer.title}</p>
                                <p className='teacher'>{answer.teacher}</p>
                            </div>
                            <time className='time' datetime={item.timestamp}>{item.timestamp}</time>
                        </div>
                        <div className='content'>
                            <p>{answer.text}</p>
                        </div>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  );
}

export default CommentSystem;
