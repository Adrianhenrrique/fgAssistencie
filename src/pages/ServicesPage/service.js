import style from './service.module.css'

function ServicePage({page}) {
    return (
        <>
            <div className={style.banner}>
                <div className={style.subBanner}>
                    <h1 className={style.title}>
                        {page == 1 && 'DOMICILIAR'}
                        {page == 2 && 'HOSPITALAR'}
                        {page == 3 && 'EMPRESARIAL'}
                        {page == 4 && 'ACOMPANHAMENTO'}
                        {page == 5 && 'PROCEDIMENTOS'}
                        {page == 6 && 'CURATIVOS'}
                        {page == 7 && 'OUTROS SERVIÇOS'}
                    </h1>
                </div>
            </div>

            {/* domiciliar */}
            {page == 1 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <h1 className={style.h1}>Atendimento no Conforto de sua Residência</h1>
                    <p className={style.p}>O serviço domiciliar presta atendimento específico de saúde no conforto do seu lar, através de equipe especializada. Esse serviço traz qualidade de vida e exclusividade no atendimento, maior autonomia e humanização. Esse serviço é realizado pelos nossos profissionais de saúde que minimiza o risco de contaminação e agravamento até do quadro do paciente, buscando uma melhor forma de sua recuperação. Segue abaixo mais características e benefícios deste atendimento:</p>

                    <h2 className={style.h2}>DOMICILIAR</h2>
                    <ul className={style.ul}>
                        <li className={style.li}>– Acompanhamento durante atendimento de equipe multidisciplinar;</li>
                        <li className={style.li}>– Profissionais: auxiliares, técnicos, enfermeiros e cuidadores.</li>
                        <li className={style.li}>– Atendimento para baixa, média e alta complexidade do quadro de saúde do paciente;</li>
                        <li className={style.li}>– Cuidados paliativos;</li>
                        <li className={style.li}>– É realizado o serviço de higienização total do paciente.</li>
                    </ul>

                    <h2 className={style.h2}>BENEFÍCIOS</h2>

                    <ul className={style.ul}>
                        <li className={style.li}>– Qualidade no atendimento;</li>
                        <li className={style.li}>– Atendimento personalizado;</li>
                        <li className={style.li}>– Melhor suporte a saúde do paciente;</li>
                        <li className={style.li}>– Mais conforto;</li>
                        <li className={style.li}>– Redução no tempo de reabilitação;</li>
                        <li className={style.li}>– Menor risco de infecções hospitalares;</li>
                        <li className={style.li}>– Melhor custo benefício.</li>
                    </ul>
                </div>
            </div>
            </>}

            {/* hospitalar */}
            {page == 2 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <h1 className={style.h1}>Acompanhamento Hospitalar</h1>
                    <p className={style.p}>Acompanhamento realizado dentro de uma unidade hospitalar de acordo com as necessidades do paciente que não pode ter o acompanhamento de seus parentes. Oferecendo mais segurança e tranquilidade tanto para o paciente quanto para seus familiares trazendo um atendimento personalizado e individual.
                    <br/>
                    <br/>
                    A clínica oferece o serviço com profissionais de alto conhecimento e habituados com o ambiente.</p>

                    <h2 className={style.h2}>BENEFÍCIOS</h2>
                    <ul className={style.ul}>
                        <li className={style.li}>– Maior segurança e tranquilidade para os familiares;</li>
                        <li className={style.li}>– Acompanhamento exclusivo;</li>
                        <li className={style.li}>– Familiares serão informados sobre estado de saúde do paciente em tempo real.</li>
                    </ul>
                </div>
            </div>
            </>}

            {/* EMPRESARIAL */}
            {page == 3 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <h1 className={style.h1}>Os Cuidados Podem Ser Feitos Até Mesmo Dentro da Sua Empresa</h1>
                    <p className={style.p}>Com a intenção de trazer maior comodidade e praticidade ao serviço de cuidados dentro de empresas, nós disponibilizamos profissionais que agregam no atendimento ao seu colaborador. Oferecemos atividades como vacinação, atendimento a seguradoras e planos de saúde, acompanhamento diário em caso de acidentes internos, primeiros socorros, campanhas e eventos.</p>

                    <h2 className={style.h2}>BENEFÍCIOS</h2>
                    <ul className={style.ul}>
                        <li className={style.li}>– Mais agilidade em casos de acidentes internos;</li>
                        <li className={style.li}>– Primeiros socorros;</li>
                        <li className={style.li}>– Melhor qualidade em saúde ao colaborador;</li>
                        <li className={style.li}>– Personalização ao atendimento;</li>
                    </ul>

                    <h2 className={style.h2}>SERVIÇOS</h2>

                    <ul className={style.ul}>
                        <li className={style.li}>– Vacina/ Imunização de seus colaboradores;</li>
                        <li className={style.li}>– Cuidar do familiar do colaborador;</li>
                        <li className={style.li}>– Treinamento de saúde e bem-estar para funcionários;</li>
                        <li className={style.li}>– Cuidar de um colaborador que tenha sofrido acidente de trabalho ou necessidade de cuidados pós internação cirúrgica;</li>
                    </ul>
                    
                    <h2 className={style.h2}>HOSPITAL</h2>
                    <ul className={style.ul}>
                        <li className={style.li}>Serviço de desospitalização não significa dar alta prematuramente para os pacientes, mas continuar com seu tratamento e cuidados de forma humanizada a pacientes em estado clínico considerando estável, com atendimento em ala exclusiva em hospitais e clínicas (geral), mas com 100% da gestão profissional da Clínica Anjos da Guarda.</li>
                    </ul>
                </div>
            </div>
            </>}

            {/* ACOMPANHAMENTO */}
            {page == 4 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <h1 className={style.h1}>Acompanhamento no Geral</h1>
                    <p className={style.p}>Nós realizamos acompanhamentos em várias ocasiões, como:</p>

                    <ul className={style.ul}>
                        <li className={style.li}>– Exames e consultas;</li>
                        <li className={style.li}>– Atividades do dia a dia como caminhadas, passeios e viagens;</li>
                        <li className={style.li}>– Realização de exercícios físicos;</li>
                        <li className={style.li}>– Hospitalar;</li>
                    </ul>
                </div>
            </div>
            </>}

            {/* PROCEDIMENTOS */}
            {page == 5 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <h1 className={style.h1}>Procedimentos Específicos</h1>
                    <p className={style.p}>Nossos profissionais são capacitados para a realização dos seguintes procedimentos:</p>

                    <ul className={style.ul}>
                        <li className={style.li}>– Procedimentos de enfermagem;</li>
                        <li className={style.li}>– Cuidados, higienização e substituição de sondas, traqueostomia;</li>
                        <li className={style.li}>– Introdução de sonda vesical;</li>
                        <li className={style.li}>– Cuidados, limpeza e substituição de estomias e cateteres;</li>
                        <li className={style.li}>– Aplicação de vacinas;</li>
                        <li className={style.li}>– Higiene, medicação e alimentação;</li>
                        <li className={style.li}>– Troca de bolsa de colostomia;</li>
                        <li className={style.li}>– Retirada de pontos após cicatrização;</li>
                        <li className={style.li}>– Tratamento pré e pós cirúrgico.</li>
                    </ul>
                </div>
            </div>
            </>}

            {/* CURATIVOS */}
            {page == 6 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <h1 className={style.h1}>Curativos no Geral</h1>
                    <p className={style.p}>O cuidado com ferimentos é complexo e de total atenção. Dispomos de profissionais especializados no tratamento de lesões, utilizando os melhores recursos e materiais de qualidade. Os mesmos atuarão desde o início da avaliação do ferimento até o fechamento da lesão. Os principais atendimentos são:</p>

                    <ul className={style.ul}>
                        <li className={style.li}>– Curativos simples e especiais;</li>
                        <li className={style.li}>– Curativos superficiais (cortes, arranhões, cuidados com hematomas);</li>
                        <li className={style.li}>– Curativos complexos (lesões por pressão nos diversos estágios, lesões mais profundas);</li>
                        <li className={style.li}>– Curativos pós cirúrgicos;</li>
                        <li className={style.li}>– Verificar, higienizar, medicar e proteger o curativo;</li>
                    </ul>
                </div>
            </div>
            </>}
            
            {/* OUTROS SERVIÇOS */}
            {page == 7 && <>
            <div className={style.content}>
                <div className={style.contentCard}>
                    <p className={style.p}>De acordo com as necessidades do paciente oferecemos profissionais especializados, que possam realizar os diversos serviços e procedimentos que competem a função, como:</p>

                    <ul className={style.ul}>
                        <li className={style.li}>– Cuidados pré e pós-operatórios;</li>
                        <li className={style.li}>– Gerenciamento e controle dos medicamentos;</li>
                        <li className={style.li}>– Realização de curativos e cuidados;</li>
                        <li className={style.li}>– Registro e controle de temperatura;</li>
                        <li className={style.li}>– Registro e controle de pressão arterial;</li>
                        <li className={style.li}>– Registro e controle de batimentos e frequência cardíaca;</li>
                        <li className={style.li}>– Registro e controle de frequência respiratória;</li>
                        <li className={style.li}>– Registro e controle de glicose;</li>
                        <li className={style.li}>– Cuidados, higienização e substituição de sondas, traqueostomia, estomia e cateteres de soroterapia;</li>
                        <li className={style.li}>– Oxigenoterapia;</li>
                        <li className={style.li}>– Acompanhar o cliente em caminhadas, passeios e viagens;</li>
                        <li className={style.li}>– Entre outros.</li>
                    </ul>
                </div>
            </div>
            </>}
        </>
    )
}

export default ServicePage;