import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { busca } from '../api/api';
import '../assets/css/blog.css'


const ListaCategorias = (props) => {

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        busca('/categorias', setCategorias)
    }, [])

    return (
        <ul className='lista-categorias container flex'>
            {
                categorias.map((categoria) => (
                    <Link to={`/categoria/${categoria.id}`} key={categoria.nome}>
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
                            {categoria.nome}
                        </li>
                    </Link>
                ))
            }
        </ul>
    )

}

export default ListaCategorias
