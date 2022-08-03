import Colaborador from '../Colaborador/Colaborador.js'
import './Time.css'

const Time = (props) => {
    const corDeFundo = {backgroundColor: props.corSecundaria}
    const corDaBorda = {borderColor: props.corPrimaria}
    const corDoCard = {backgroundColor: props.corPrimaria}
    
    return (
        (props.colaboradores.length > 0) ? <section style={corDeFundo} className='time'>
            <h3 style={corDaBorda}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} corDoCard={corDoCard}/>)}
            </div>
        </section>
        : ''
    )
}

export default Time
