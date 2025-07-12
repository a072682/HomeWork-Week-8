import './_Card01.scss';

function Card01({ item }) {

    return(
        <>
            <div className="card01">
                <div className="card01-bg position-relative">
                    <img src={item.cardData?.img} className="card-img" alt="Card Image" />
                    <div className='card01-time fw-600 fs-14 lh-15 col-0068FF bg-e5f4ff poppins px-12 py-8'>
                        {item.time}
                    </div>
                    <div className="card01-body py-24 px-16">
                        <h5 className="card01-title fw-600 fs-20 poppins">{item.cardData?.title}</h5>
                        <div className="card01-user d-flex justify-content-start align-items-center gap-8 mt-8">
                            <img className='user-img' src={item.cardData?.userimg} alt="" />
                            <p className='fw-400 fs-16 lh-15 col-4B4B4B fontFamily'>{item.cardData?.name}</p>
                        </div>
                        <div className="card01-content mt-24">
                            <div className='text01 d-flex justify-content-between align-items-center'>
                                <p className='fw-700 fs-16 lh-15 col-0068FF fontFamily'>募資進度 {item.cardData?.progress}</p>
                                <p className='fw-400 fs-14 lh-15 col-4B4B4B fontFamily'>已有 {item.cardData?.NumberOfPeople} 位同學加入</p>
                            </div>
                            <div className="progress mt-8">
                                <div    className="progress-bar" 
                                        role="progressbar" 
                                        style={{ width: `${item.cardData?.progress}` }} 
                                        aria-valuenow={item.cardData?.progress} 
                                        aria-valuemin="0" 
                                        aria-valuemax="100">
                                </div>
                            </div>
                            <div className='text02 mt-8'>
                                <div className='fw-700 fs-20 lh-15 col-000000 fontFamily'>
                                    NT$ {item.cardData?.price}
                                    <del className='fw-400 fs-14 lh-15 col-4B4B4B fontFamily ms-8'>
                                        NT$ {item.cardData?.origin_price}
                                    </del>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card01;