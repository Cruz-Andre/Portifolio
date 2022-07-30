import './CampoTexto.css'

// Montagem da estrutura com uma const e arrow function
const CampoTexto = (props) => {
    /*concatenação de textos e template string
    const placeholderModificada = `${props.placeholder}...`*/
    return (
        <div className="campo-texto" >
            <label>{props.label}</label>
            <input placeholder={props.placeholder}/>
            {/* concatenação de textos e template string
            <input placeholder={placeholderModificada}/> */}
        </div>
    )
}

export default CampoTexto
