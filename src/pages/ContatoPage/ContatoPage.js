import ContactForm from "../../components/ContactForm";
import style from './ContatoPage.module.css'
import icon from '../../Img/verifica.png'
import Iten from "../../components/list/addList/Iten";

function ContatoPage() {

    return (
        <>
            <div className={style.backgroundBanner}>
                <div>
                    <ContactForm />
                    <div className={style.rightText}>
                        <h2>Conheça nossos serviços e escolha<br/>
                        de acordo com a sua necessidade,<br/>
                        tendo o cuidado que você merece!</h2>
                        <Iten icon={icon} text='Gestão completa de equipe;'/>
                        <Iten icon={icon} text='Supervisão pela equipe de enfermagem;'/>
                        <Iten icon={icon} text='Flexibilidade;'/>
                        <Iten icon={icon} text='Atendimento 24h;'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContatoPage;