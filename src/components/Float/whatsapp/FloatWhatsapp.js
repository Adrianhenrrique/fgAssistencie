import style from './FloatWhatsapp.module.css'

function FloatWhatsapp({logo}) {
    return(
        <>
            <a className={style.link} href='https://wa.me/5511914813191' target="_blank">
                <div className={style.whatsapp}>
                    <img src={logo} alt="logo do whatsapp"/>
                </div>
            </a>
        </>
    )
}

export default FloatWhatsapp;