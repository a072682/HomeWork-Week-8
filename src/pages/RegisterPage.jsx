import { Link, useNavigate } from 'react-router-dom';
import './_RegisterPage.scss';
import { Container } from 'react-bootstrap';
import { Fragment, useState } from 'react';
import { registerUser } from '../slice/userSlice';
import { useDispatch } from 'react-redux';
import { login } from '../slice/authSlice';

function RegisterPage (){

    const navigate = useNavigate();//頁面跳轉宣告

    const dispatch = useDispatch();//使用中央函式

    const [useremail, setUseremail] = useState('');
    const [errorMsg, setErrorMsg] = useState(''); // ⬅️ 錯誤訊息狀態

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const [showPassword02, setShowPassword02] = useState(false);
    const [password02, setPassword02] = useState('');

    const handleSubmit01 = (e) => {
        e.preventDefault();

        if (!useremail || !password || !password02) {
            setErrorMsg(!useremail ? '請輸入帳號' : '請輸入密碼');
            console.log("註冊失敗，請輸入帳號或密碼")
            return;
        }

        if (useremail !== 'admin123@gmail.com' || password !== 'admin123' || password !== password02) {
            setErrorMsg('創建帳號失敗，帳號或密碼錯誤');
            console.log("登入失敗，帳號或密碼錯誤")
            return;
        }

        // 成功登入
        // dispatch(login());
        // setErrorMsg('');
        // console.log('登入成功');
        navigate("/");
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!useremail || !password || !password02) {
            setErrorMsg(!useremail ? '請輸入帳號' : '請輸入密碼');
            console.log("註冊失敗，請輸入帳號或密碼")
            return;
        }else if(password !== password02){
            setErrorMsg("確認確認請與密碼相同");
            console.log("註冊失敗，確認確認請與密碼相同")
            return;
        }

        // ✅ 假設基本驗證
        if (useremail && password === password02) {
        setErrorMsg('');
        // 模擬註冊成功，清空表單
        setUseremail('');
        setPassword('');
        setPassword02('');
        dispatch((registerUser(
            {
            email:useremail,
            password,
            }
        )))
        // 取得比對後的登入結果
        const found = JSON.parse(localStorage.getItem('currentUserData'));

        if (found && found.email === useremail) {
            setErrorMsg('');
            console.log('創建帳號成功');
            dispatch(login({ email: useremail }));
            navigate('/');
        } else {
            setErrorMsg('創建帳號失敗');
        }
        } else {
        setErrorMsg('請填寫所有欄位');
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
            <div className='Register-desk d-flex p-lg-40'>
                <div className='Register-desk-left d-none d-lg-flex'>
                    <img className='img-set my-auto' src={`${import.meta.env.BASE_URL}image/login.png`} alt="" />
                </div>
                <div className="Register-desk-right">
                    <div className="Register-box py-60 px-24 py-lg-111 mx-lg-auto my-lg-auto">
                        <h2 className='fw-600 fs-32'>歡迎加入 Learning</h2>
                        <div className='Register-outside-item mt-24'>
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
                            <p className='fw-600 fs-16 lh-15 col-000000 poppins'>或使用 Learning 帳號註冊</p>
                            <div className='d-flex flex-column mt-16 gap-8'>
                                <label htmlFor="email" className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>電子信箱<span className='text-danger'>*</span></label>
                                <input className='p-16 fw-400 fs-16 lh-15 col-000000 poppins' type="email" id="email" name="email" placeholder="請輸入電子信箱" autoComplete="username"required 
                                value={useremail}
                                onChange={(e) => setUseremail(e.target.value)}
                                />
                            </div>
                            <div className='d-flex flex-column mt-16 gap-8 position-relative'>
                                <label htmlFor="password" className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>密碼<span className='text-danger'>*</span></label>
                                <input className='py-16 ps-16 pe-36 fw-400 fs-16 lh-15 col-000000 poppins' type={showPassword ? 'password' : 'text'} id="password" name="password" placeholder="請輸入密碼" autoComplete="current-password" required 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                />
                                {password && (
                                    <button type="button" className="eye-btn" onClick={() => setShowPassword(!showPassword)}>
                                        <img    src={showPassword ? `${import.meta.env.BASE_URL}image/icons/ic_eye_close.png` : `${import.meta.env.BASE_URL}image/icons/ic_eye-open.png`}
                                                alt={showPassword ? '隱藏密碼' : '顯示密碼'}
                                                className="eye-icon"
                                        />
                                    </button>
                                )}
                            </div>
                            <div className='d-flex flex-column mt-16 gap-8 position-relative'>
                                <label htmlFor="password" className='fw-400 fs-16 lh-15 col-4b4b4b poppins'>確認密碼<span className='text-danger'>*</span></label>
                                <input className='p-16 fw-400 fs-16 lh-15 col-000000 poppins' type={showPassword02 ? 'password' : 'text'} id="password" name="password" placeholder="請輸入密碼" autoComplete="current-password" required 
                                value={password02}
                                onChange={(e) => setPassword02(e.target.value)}
                                />
                                {/* 顯示錯誤訊息 */}
                                {errorMsg && (
                                <div className='text-danger' role='alert'>
                                    {errorMsg}
                                </div>
                                )}
                                {password02 && (
                                    <button type="button" className="eye-btn" onClick={() => setShowPassword02(!showPassword02)}>
                                        <img    src={showPassword02 ? `${import.meta.env.BASE_URL}image/icons/ic_eye_close.png` : `${import.meta.env.BASE_URL}image/icons/ic_eye-open.png`}
                                                alt={showPassword02 ? '隱藏密碼' : '顯示密碼'}
                                                className="eye-icon"
                                        />
                                    </button>
                                )}
                            </div>
                            <button type='submit' className={`submit-btn mt-24 ${password && password02 ? '' : 'disabled'}`} disabled={!password}>立即註冊</button>
                            <p className='mt-8 fw-400 fs-14 lh-15 col-4b4b4b poppins'>建立帳號即表示您同意我們的<span className="text-decoration-underline fw-400 fs-14 lh-15 col-4b4b4b poppins pointer">服務條款</span>及<span className="text-decoration-underline fw-400 fs-14 lh-15 col-4b4b4b poppins pointer">隱私權政策</span></p>
                        </form>
                        <p className='fw-400 fs-16 lh-15 col-4b4b4b poppins mt-24'>已經有 Learning 帳號了嗎？<Link to="/LoginPage" className="text-decoration-underline">立即登入</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegisterPage;