import React from 'react'
import './assets/css/base/base.css'
import { Routes, Route } from 'react-router-dom'
import Home from './paginas/Home.jsx';
import Sobre from './paginas/Sobre.jsx';
import Pagina404 from './paginas/Pagina404.jsx';
import Cabecalho from './components/Cabecalho.jsx';
import Post from './paginas/Post.jsx';
import Categoria from './paginas/Categoria';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cabecalho />}>
          <Route index element={<Home />}/>
          <Route path='/sobre' element={<Sobre />}/>
          <Route path='/categoria/:id/*' element={<Categoria />}/>
          <Route path='/posts/:id' element={<Post />}/>
          <Route path='*' element={<Pagina404 />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
