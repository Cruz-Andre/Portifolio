import './Botao.css'

const Botao = (props) => {
    return (
        <button className="botao">
            {props.children} {/* Tudo que estiver dentro do <Botao>aqui dentro</Botao> será recebido pelo children e retornado */}
        </button>
    )
}

export default Botao
