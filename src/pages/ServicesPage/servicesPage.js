import style from './servicesPage.module.css'
import CardServices from '../../components/list/cards/CardServices';
import Domiciliar from '../../Img/casa-limpa.png'
import Domiciliar2 from '../../Img/domiciliar.jpg'
import hospitalar from '../../Img/hospital.png'
import hospitalar2 from '../../Img/hospitalar.jpg'
import empresarial from '../../Img/companhia.png'
import empresarial2 from '../../Img/empresa.jpg'
import acompanhamento from '../../Img/pranchetas.png'
import acompanhamento2 from '../../Img/acompanhamento.jpg'
import procedimentos from '../../Img/siringa.png'
import procedimentos2 from '../../Img/procedimentos.jpg'
import curativos from '../../Img/gesso.png'
import curativos2 from '../../Img/curativo.jpg'
import cursoDeCuidador from '../../Img/enfermeira.png'
import cursoDeCuidador2 from '../../Img/Curso.png'
import outrosServicos from '../../Img/mais.png'
import outrosServicos2 from '../../Img/outros.jpg'
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';



function ServicesPage() {

    const navigate = useNavigate();

    const goToPage = (page) => {
        switch (page) {
            case 1:
                navigate('/services/domiciliar')
            break;
            
            case 2:
                navigate('/services/hospitalar')
            break;
            
            case 3:
                navigate('/services/empresarial')
            break;
            
            case 4:
                navigate('/services/acompanhamento')
            break;
            
            case 5:
                navigate('/services/procedimentos')
            break;
            
            case 6:
                navigate('/services/curativos')
            break;
            
            case 7:
                navigate('/services/outros')
            break;
        }
        
    };

    const [activeItem, setActiveItem] = useState(null);

    const handleClick = (index) => {
        setActiveItem(index);
        goToPage(index)
    }

    return (
        <div className={style.servicesPageback}>
            <div className='ItenEmpty'></div>
            <div className={style.content}>
                <div className={style.Iten} key='1' onClick={() => handleClick(1)}>
                    <CardServices backgroudImager={Domiciliar2} logo={Domiciliar} title='Domiciliar'/>
                </div>
                <div className={style.Iten} key='2' onClick={() => handleClick(2)}>
                    <CardServices backgroudImager={hospitalar2} logo={hospitalar} title='Hospitalar'/> 
                </div>
                <div className={style.Iten} key='3' onClick={() => handleClick(3)}>
                    <CardServices backgroudImager={empresarial2} logo={empresarial} title='Empresarial'/>
                </div>
                <div className={style.Iten} key='4' onClick={() => handleClick(4)}>
                    <CardServices backgroudImager={acompanhamento2} logo={acompanhamento} title='Acompanhamento'/>
                </div>
                <div className={style.Iten} key='5' onClick={() => handleClick(5)}>
                    <CardServices backgroudImager={procedimentos2} logo={procedimentos} title='Procedimentos'/>
                </div>
                <div className={style.Iten} key='6' onClick={() => handleClick(6)}>
                    <CardServices backgroudImager={curativos2} logo={curativos} title='Curativos'/>
                </div>
                {/* <div className={style.Iten}>
                    <CardServices backgroudImager={cursoDeCuidador2} logo={cursoDeCuidador} title='Curso de Cuidador'/>
                </div> */}
                <div className={style.Iten} key='7' onClick={() => handleClick(7)}>
                    <CardServices backgroudImager={outrosServicos2} logo={outrosServicos} title='Outros'/>
                </div>
            </div>
            <div className='ItenEmpty'></div>
        </div>
    )
}

export default ServicesPage;