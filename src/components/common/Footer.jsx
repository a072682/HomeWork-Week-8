import { Col, Container, Row } from "react-bootstrap";
import './_Footer.scss';



function Footer(){
    return(
        <>
            <div className="footer">
                <Container>
                    <div className="footer-bg">
                        <div className="d-flex flex-column flex-xl-row justify-content-xl-between">
                            <div className="footer-img-box">
                                <img className="img-set" src={`${import.meta.env.BASE_URL}image/logo-white.png`} alt="" />
                            </div>
                            <div className="footer-link-box d-flex flex-column gap-24 mt-40 flex-xl-row gap-xl-32 mt-xl-0 align-items-xl-end">
                                <a href="#">
                                    <p>常見問題</p>
                                </a>
                                <a href="#">
                                    <p>關於我們</p>
                                </a>
                                <a href="#">
                                    <p>隱私權政策</p>
                                </a>
                                <a href="#">
                                    <p>使用者條款</p>
                                </a>
                            </div>
                        </div>
                        <div className="mt-xl-16 d-flex flex-column flex-xl-row-reverse justify-content-xl-between">
                            <div className="footer-icon-box d-flex gap-16 mt-40 mt-xl-0">
                                <a href="#" className="footer-icon">
                                    <img className="line" src={`${import.meta.env.BASE_URL}image/icons/line.png`} alt="" />
                                </a>
                                <a href="#" className="footer-icon">
                                    <img className="youtube" src={`${import.meta.env.BASE_URL}image/icons/youtube.png`} alt="" />
                                </a>
                                <a href="#" className="footer-icon">
                                    <img className="facebook" src={`${import.meta.env.BASE_URL}image/icons/facebook.png`} alt="" />
                                </a>
                            </div>
                            <div className="footer-end mt-32 mt-xl-0 d-xl-flex align-items-xl-end">
                                <p className="">copyright © 2024 課程網站 All Rights Reserved.</p>
                            </div>
                        </div>
                        
                    </div>
                </Container>  
            </div>
        </>
    )
}
export default Footer;