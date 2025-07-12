import './_Card02.scss';

function Card02({ item }) {

    return(
        <>
            <div className="card02">
                <div className="card02-bg">
                    <div className="card02-img-box">
                        <img src={item.cardData.img} className="card02-img" alt="Card Image" />
                    </div>
                    {item.cardData.discount_state && (
                        <div className='card02-time'>
                            {item.cardData.discount}
                        </div>
                    )}
                    <div className="card02-body ">
                        <h5 className="card02-title">{item.cardData.title}</h5>
                        <div className="card02-content">
                            <div className="card02-user">
                                <img className='user-img' src={item.cardData.userimg} alt="" />
                                <p>{item.cardData.name}</p>
                            </div>
                            <div className='card02-text'>
                                <div className=''>
                                    NT$ {item.cardData.price}
                                </div>
                                <p className='text-end'>
                                    <del>
                                        NT$ {item.cardData.origin_price}
                                    </del>
                                </p>
                                
                            </div>
                        </div>
                        <div className="card02-content02 ">
                            <div className='card02-text02'>
                                <p className='text01 fw-700 fs-16 lh-15 fontFamily'>{item.classData.category}</p>
                                <p className='text02 fw-400 fs-14 lh-15 fontFamily'>已有 {item.classData.NumberOfPeople} 位同學加入</p>
                            </div>
                            <div className="card02-evaluate">
                                <p>⭐️{item.classData.score}
                                    <span>({item.classData.NumberOfPeople})</span>
                                </p>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card02;