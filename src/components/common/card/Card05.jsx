import './_Card05.scss';

function Card05({ item }) {

    return(
        <>
            <div className="card05">
                <div className="card05-bg">
                    <div className="card05-img-box">
                        <img src={item.img} className="card05-img" alt="Card Image" />
                    </div>
                    {item.discount_state && (
                        <div className='card05-time'>
                            {item.discount}
                        </div>
                    )}
                    <div className="card05-body ">
                        <h5 className="card05-title">{item.title}</h5>
                        <div className="card05-content">
                            <div className="card05-user">
                                <img className='user-img' src={item.userimg} alt="" />
                                <p>Kelly Hsu</p>
                            </div>
                            <div className='card05-text'>
                                <div className=''>
                                    NT$ {item.price}
                                </div>
                                <p className='text-end'>
                                    <del>
                                        NT$ {item.origin_price}
                                    </del>
                                </p>
                                
                            </div>
                        </div>
                        <div className="card05-content02 ">
                            <div className='card05-text02'>
                                <p className='text01 fw-700 fs-16 lh-15 fontFamily'>程式開發</p>
                                <p className='text02 fw-400 fs-14 lh-15 fontFamily'>已有 {item.NumberOfPeople} 位同學加入</p>
                            </div>
                            <div className="card05-evaluate">
                                <p>⭐️{item.score}
                                    <span>({item.NumberOfPeople})</span>
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card05;