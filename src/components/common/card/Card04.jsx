import './_card04.scss';

function Card04({ item }) {

    return(
        <>
            <div className="card04">
                <div className="card04-bg">
                    <div className="card04-img-box">
                        <img src={item.cardData?.img} className="card04-img" alt="Card Image" />
                    </div>
                    {item.cardData?.discount_state && (
                        <div className='card04-time'>
                            {item.cardData?.discount}
                        </div>
                    )}
                    <div className="card04-body ">
                        <h5 className="card04-title">{item.cardData?.title}</h5>
                        <div className="card04-content">
                            <div className="card04-user">
                                <img className='user-img' src={item.cardData?.userimg} alt="" />
                                <p>{item.cardData?.name}</p>
                            </div>
                            <div className='card04-text'>
                                <div className=''>
                                    NT$ {item.cardData?.price}
                                </div>
                                <p className='text-end'>
                                    <del>
                                        NT$ {item.cardData?.origin_price}
                                    </del>
                                </p>
                                
                            </div>
                        </div>
                        <div className="card04-content02 ">
                            <div className='card04-text02'>
                                <p className='text01 fw-700 fs-16 lh-15 fontFamily'>程式開發</p>
                                <p className='text02 fw-400 fs-14 lh-15 fontFamily'>已有 {item.cardData?.NumberOfPeople} 位同學加入</p>
                            </div>
                            <div className="card04-evaluate">
                                <p>⭐️{item.cardData?.score}
                                    <span>({item.cardData?.NumberOfPeople})</span>
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card04;