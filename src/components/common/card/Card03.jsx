import './_Card03.scss';

function Card03({ item,handleClickToCoursePage,teacherNumALLDate }) {

    return(
        <>
            <div className='card03'>
                <div className="card03-bg">
                    <img className='card03-user-img' src={item.classData?.teacher?.teacherImg} alt="" />

                    <div className="card03-body">
                        <h5 className='card03-title'>{item.classData?.teacher?.teacherName}</h5>
                        <div className='card03-category'>
                            <p className='tag'>{item.cardData?.category}</p>
                            <p className='score'>⭐️{item.classData?.teacher?.score}<span>({teacherNumALLDate})</span></p>
                        </div>
                        <div className='card03-content'>
                            <p className='card03-text'>{item.classData?.teacher?.teacherIntroduce}</p>
                        </div>
                        <button type='button' className='card03-btn' onClick={() => handleClickToCoursePage(item.id)}>
                            <p>探索 Mr. {item.classData?.teacher?.teacherName}的教學課程</p>
                        </button>
                    </div>
                </div>
            </div>   
        </>
    )
}

export default Card03;