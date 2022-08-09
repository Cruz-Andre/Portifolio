import React from 'react';
import image from '../assets/img/doguito404.svg'
import '../assets/css/404.css'

const Pagina404 = () => {
    return (
        <main className='container flex flex--centro flex--coluna'>
            <img className='doguito-imagem' src={image} alt='Ops, essa não existe na nossa dimensão!' />
            <p className='naoencontrado-texto'>Ops, essa página não existe na nossa dimensão!</p>
        </main>
    )
}

export default Pagina404
