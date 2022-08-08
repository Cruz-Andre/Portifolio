import React from 'react'
import './App.css'
import { Container, Typography } from '@mui/material'
import FormularioCadastro from './componentes/FormularioCadastro/FormularioCadastro.jsx'
import ValidacoesCadastro from './contexts/ValidacoesCadastro.js'
import {validarCPF, validarSenha} from './models/cadastro.js'

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">Fomulário de Cadastro</Typography>
      
      {/* assistir a aula de useContext */}
      <ValidacoesCadastro.Provider value={{cpf:validarCPF, senha:validarSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm}/>
      </ValidacoesCadastro.Provider>
    </Container>
  )
}

function aoEnviarForm(dados) {
  console.log(dados);
}

export default App
