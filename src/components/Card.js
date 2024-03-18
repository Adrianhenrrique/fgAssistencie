import style from './Card.module.css';
import "animate.css/animate.min.css";


function Card({imagen, title, descript, inverted}) {
    
    return (
        <>
            <div className={`${style.cardContent} ${inverted ? style.inverted : ''}`}>
                <img src={imagen} className={style.imagenBanner}/>
                <div className={`${style.content} ${inverted ? style.inverted : ''}`}> 
                    <h2 className={style.titleName}>{title}</h2>
                    <p className={style.descriptText}>{descript}</p>
                </div>
            </div>
        </>
    )
}

export default Card;