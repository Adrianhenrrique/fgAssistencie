import NavBar from '../NavBar';
import NavBarMobile from '../NavBarMobile';
import style from './Header.module.css'

function Header({logo}) {

    return(
        <>
            <header className={style.appHeader}>
                <div className={style.contentHeader}>
                    <img src={logo} className={style.logo}/>
                    <h1>F&G ASSISTÊNCIA DOMICILIAR</h1>
                </div>
                <NavBar/>
                {/* {isLargerThan800 ?  : <NavBarMobile/>} */}
            </header>
        </>
    )
}

export default Header;