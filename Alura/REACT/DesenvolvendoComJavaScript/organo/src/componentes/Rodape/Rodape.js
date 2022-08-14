import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodapepe'>
            <section>
                <ul>
                    <li>
                        <a href='https://facebook.com' target='_blank' rel="noreferrer">
                            <img src="/imagens/fb.png" alt='Icone Facebook'/> 
                        </a>
                    </li>

                    <li>
                        <a href='https://twitter.com' target='_blank' rel="noreferrer">
                            <img src="/imagens/tw.png" alt='Icone Twitter'/>
                        </a>
                    </li>

                    <li>
                        <a href='https://instagram.com' target='_blank' rel="noreferrer">
                            <img src="/imagens/ig.png" alt='Icone Instagram'/>
                        </a>
                    </li>
                </ul>
            </section>

            <section>
                <img src="/imagens/logo.png" alt="Logo Organo" />
            </section>

            <section>
                <p>Desenvolvido por Alura</p>
            </section>
        </footer>
    )
}

export default Rodape
