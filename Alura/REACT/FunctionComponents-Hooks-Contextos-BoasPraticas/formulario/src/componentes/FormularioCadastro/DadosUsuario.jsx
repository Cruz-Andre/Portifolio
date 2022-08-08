import React, { useState, useContext } from 'react';
import { Button, TextField } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro.js';
import useErros from '../../hooks/useErros.js';

function DadosUsuario({aoEnviar}) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form 
            onSubmit={evento => {
                evento.preventDefault();
                if(possoEnviar()) {
                    aoEnviar({email, senha})
                }
            }}
        >
            <TextField
                value={email}
                onChange={evento => {
                    setEmail(evento.target.value)
                }}
                id="email" 
                name='email'
                label="email" 
                type="email" 
                fullWidth 
                margin='normal' 
                required
            />
            
            <TextField 
                value={senha}
                onChange={evento => {
                    setSenha(evento.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.senha.valido}
                helperText={erros.senha.texto}
                id="senha" 
                name='senha'
                label="senha" 
                type="password" 
                fullWidth 
                margin='normal' 
                required
            />
            
            <Button variant="contained" type="submit">Próximo</Button>
        </form>
    )
}

export default DadosUsuario
