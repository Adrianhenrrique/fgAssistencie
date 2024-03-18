import { textDecoration } from '@chakra-ui/react';
import style from './CardServices.module.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';


function CardServices({logo, title, backgroudImager}) {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    return(
        <div className={style.content}>
            <div className={style.left} style={{
                backgroundColor: '#fff',
                textDecoration: 'none',
                boxShadow: '2px 2px 2px 0.5px #000',
                backgroundColor: isHover ? 'nome' : '#fff',
                backgroundImage: isHover ? `url(${backgroudImager})` : 'none',
                backgroundSize: isHover ? 'cover' : 'none'
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
                <img 
                className={style.icon} 
                src={logo} style={{
                    height: '85px',
                    width: '85px'
                }}/>
                <h2>
                    {title}
                </h2>
            </div>
        </div>
    )
}

export default CardServices;