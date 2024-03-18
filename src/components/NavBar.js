import style from './NavBar.module.css';
import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";

function NavBar ({}) {
    const navigate = useNavigate();

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
    return (
        
    <nav className={style.NavBar}> 
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
    </nav>

        // <>
        //     <nav className={style.Navbar}>
        //         <ul className={style.ContentBar}>
        //             <li className={style.ItenBar} style={{color: "black"}} onClick={goToHomePages}>Home</li>
        //             <li className={style.ItenBar} onClick={goToServicesPages}>Serviços</li>
        //             <li className={style.ItenBar} onClick={goToContatePages}>Contato</li>
        //         </ul>
        //     </nav>
        // </>
    )
}

export default NavBar;