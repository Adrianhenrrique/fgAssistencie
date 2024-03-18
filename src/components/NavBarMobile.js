import style from './NavBarMobile.module.css';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import menu from '../Img/menu-aberto.png'
import menuOpen from '../Img/seta-direita.png'

function NavBarMobile() {const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const goToPage = (page) => {
        switch (page) {
            case 1:
                navigate('./')
            break;
            case 2:
                navigate('/contato')
            break;
            case 3:
                navigate('/services')
            break;
        }
        
    };

    const [activeItem, setActiveItem] = useState(null);
    const items = ['Home', 'Contato', 'Serviços'];

    const handleClick = (index) => {
        setActiveItem(index);
        
        const n = index + 1;
        goToPage(n)
    }

    const [bgImage, setBgImage] = useState(menu);

    const mudaImagem = (n) => {
        if (n) {
            setBgImage(menu);
        } else {
            setBgImage(menuOpen);
        }
        
        
    };

    return (
        
    <nav className={style.NavBar}> 
            <img src={bgImage} style={{
                height: '30px',
                width: '30px',
                marginRight: '25px'
            }} className={style.button} onClick={() => {setIsOpen(!isOpen); mudaImagem(isOpen);}} />

            <div>
                    {isOpen && (
                        <ul className={style.ContentBar}>  
                            {items.map((item, index) => (
                                <li
                                className={style.ItenBar}
                                key={index}
                                style={{
                                    color: activeItem === index ?'black' : '#686868',
                                    listStyle: 'none',
                                    fontWeight: activeItem === index ? 700 : 400,
                                    transition: 'transform 0.2s ease-in-out'
                                }}
                                onClick={() => handleClick(index)}
                                >
                                {item}
                                </li>
                            ))}
                        </ul>   
                    )}
            </div>
            
    </nav>
    )
}

export default NavBarMobile;