import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodapepe'>
            <a href='https://facebook.com' target='_blank' rel="noreferrer">
                <img src="/imagens/fb.png" alt='Icone Facebook'/> 
            </a>
            <a href='https://twitter.com' target='_blank' rel="noreferrer">
                <img src="/imagens/tw.png" alt='Icone Twitter'/>
            </a>
            <a href='https://instagram.com' target='_blank' rel="noreferrer">
                <img src="/imagens/ig.png" alt='Icone Instagram'/>
            </a>
            <img src="/imagens/logo.png" alt="Logo Organo" />
            <p>Desenvolvido por Alura</p>
        </footer>
    )
}

export default Rodape
