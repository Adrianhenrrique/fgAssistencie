import style from './Footer.module.css'

function Footer({logo}) {
    return(
        <>
        <footer className={style.HomePageFooter}>
            <div className={style.content}>
                <div className={style.contate}>
                    <h2>Atendimento 24h:</h2>

                    <p>
                        <a href='tel:11914813191'>(11) 91481-3191</a>
                        <br/>
                        <a href='tel:1130906043'>(11) 3090-6043</a>
                        <br/>Seg a Sab 07:00 – 00:00 
                        <br/>domingo Por compromisso
                    </p>
                </div>

                <div className={style.socialMedia}>
                    <h2>Redes social</h2>
                    <div>
                        <a className={style.social} href='https://www.instagram.com/fg.homecare?igsh=MTVsOXlra3JuZGlyMQ==' target="_blank">
                            <img src={logo} />
                        </a>
                    </div>
                </div>
            </div>
        <p className={style.reserved}>F&G ASSISTÊNCIA DOMICILIAR – Todos os direitos reservados.<br/>CNPJ: 53.504.231/0001-07ㅤㅤㅤㅤㅤCopyright © 2024<br/>
        <div>
        <br/>Feito com <span>&hearts;</span>
        </div>
        <br/><span className={style.editorName}>Feitor por Adrian Henrique</span> </p>
        </footer>
        </>
    )
}

export default Footer;