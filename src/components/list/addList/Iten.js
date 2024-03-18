import style from './Iten.css'

function Iten({icon, text}) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center'

        }}>
            <img style={{
                height: '25px',
                marginRight: '7px'
            }} src={icon}/>
            <p style={{
                color: '#fff',
                fontFamily: 'Roboto',
                fontWeight: 400,
                lineHeight: '21px',
                wordSpacing: '1px',
                fontSize: '15px'
            }}>{text}</p>
        </div>
    )
}

export default Iten;