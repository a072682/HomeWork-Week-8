import { Link } from 'react-router-dom';
import './_LoginPage.scss';
import { Container } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slice/authSlice';
import { useNavigate } from "react-router-dom";
import { matchUser } from '../slice/userSlice';


function LoginPage (){
    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState(''); // ⬅️ 錯誤訊息狀態
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!useremail || !password) {
            setErrorMsg(!useremail ? '請輸入帳號' : '請輸入密碼');
            console.log("登入失敗，請輸入帳號或密碼")
            return;
        }

        // 使用 Redux 中的使用者清單做帳密比對
        dispatch(matchUser({ email: useremail, password }));

        // 取得比對後的登入結果
        const found = JSON.parse(localStorage.getItem('currentUserData'));

        if (found && found.email === useremail) {
            dispatch(login({ email: useremail }));
            setErrorMsg('');
            console.log('登入成功');
            navigate('/');
        } else {
            setErrorMsg('帳號或密碼錯誤');
        }
    };

    const OutSideItem = [
        {
            name:"google",
            img:`${import.meta.env.BASE_URL}image/icons/ic_google.png`
        },
        {
            name:"facebook",
            img:`${import.meta.env.BASE_URL}image/icons/ic_facebook.png`
        },
        {
            name:"apple",
            img:`${import.meta.env.BASE_URL}image/icons/ic_apple.png`
        },
    ]
    return(
        <>
            <div className='Login-desk d-flex p-lg-40'>
                <div className='Login-desk-left d-none d-lg-flex'>
                    <img className='img-set my-auto' src={`${import.meta.env.BASE_URL}image/login.png`} alt="" />
                </div>
                <div className="Login-desk-right">
                    <div className="Login-box py-60 px-24 py-lg-111 mx-lg-auto my-lg-auto">
                        <h2 className='fw-600 fs-32'>歡迎回來!</h2>
                        <div className='Login-outside-item mt-24'>
                                {
                                    OutSideItem?.map((item,index)=>{
                                        return(
                                            <Fragment key={index}>
                                                <button type='button' className='Loginitem p-16 border-0 w-100'>
                                                    <div className='position-relative text-center fw-400 fs-16 lh-15 col-4b4b4b poppins'>
                                                        <span>使用{item.name}帳號登入</span>
                                                        <div className='w24 position-absolute top-50 start-0 translate-middle-y'>
                                                            <img className='google-item-img img-set ' src={item.img} alt="" />
                                                        </div>
                                                    </div>
                                                </button>
                                            </Fragment>
                                        )
                                    })
                                }
                        </div>
                        <form className='mt-24' onSubmit={handleSubmit}>
                            <p className='fw-600 fs-16 lh-15 col-000000 poppins'>或使用 Learning 帳號登入</p>
                            <div className='d-flex flex-column mt-16 gap-8'>
                                <label htmlFor="email" className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>電子信箱<span className='text-danger'>*</span></label>
                                <input className='p-16 fw-400 fs-16 lh-15 col-000000 poppins' type="email" id="email" name="email" placeholder="請輸入電子信箱" autoComplete="username" required 
                                value={useremail}
                                onChange={(e) => setUseremail(e.target.value)}/>
                            </div>
                            <div className='d-flex flex-column mt-16 gap-8 position-relative'>
                                <label htmlFor="password" className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>密碼<span className='text-danger'>*</span></label>
                                <input className='p-16 fw-400 fs-16 lh-15 col-000000 poppins' type={showPassword ? 'text' : 'password'} id="password" name="password"        
                                placeholder="請輸入密碼" autoComplete="current-password" required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                {/* 顯示錯誤訊息 */}
                                {errorMsg && (
                                <div className='text-danger' role='alert'>
                                    {errorMsg}
                                </div>
                                )}
                                {password && (
                                    <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                                        <img    src={showPassword ? `${import.meta.env.BASE_URL}image/icons/ic_eye_close.png` : `${import.meta.env.BASE_URL}image/icons/ic_eye-open.png`}
                                                alt={showPassword ? '隱藏密碼' : '顯示密碼'}
                                                className="eye-icon"
                                        />
                                    </button>
                                )}
                            </div>
                            <div className='d-flex justify-content-between align-items-center mt-8'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="rememberMe" name="rememberMe"/>
                                    <label className="form-check-label" htmlFor="rememberMe">
                                        記住帳號
                                    </label>
                                </div>
                                <button type='button' className='border-0'>忘記密碼?</button>
                            </div>
                            <button type='submit' className={`submit-btn mt-24 ${!password ? 'disabled' : ''}`} disabled={!password}>立即登入</button>
                        </form>
                        <p className='fw-400 fs-16 lh-15 col-4b4b4b poppins mt-24'>沒有 Learning 帳號嗎？<Link to="/RegisterPage" className="text-decoration-underline">立即註冊</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;