import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { busca } from '../api/api'
import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias.jsx'
import ListaPost from '../components/ListaPost.jsx'
import SubCategoria from './SubCategoria'

const Categoria = () => {

    const {id} = useParams()
    
    // const {url, path} = useMatch()
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>
            <ListaCategorias/>
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`} key={subcategoria}>
                            <Link to={`${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                    
                }
            </ul>
            <Routes>
                <Route index element={<ListaPost url={`/posts?categoria=${id}`} />} />
                <Route path=':subcategoria' element={<SubCategoria />}  />
            </Routes>
            
        </>
    )
}

export default Categoria
