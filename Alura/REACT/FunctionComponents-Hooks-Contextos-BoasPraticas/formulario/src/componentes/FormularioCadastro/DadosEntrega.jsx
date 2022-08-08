import React, { useState, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro.js';

function DadosEntrega({aoEnviar}) {
    const [cep, setCep] = useState("") //<----declaração
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")

    const validacoes = useContext(ValidacoesCadastro)

    return (
        <form 
            onSubmit={evento => {
                evento.preventDefault();
                aoEnviar({cep, endereco, numero, estado, cidade})
            }}
        >
            <TextField
                value={cep} //<---atribuição
                onChange={evento => {
                    setCep(evento.target.value)
                }}
                id="cep" 
                label="CEP" 
                type="number" 
                margin='normal' 
                required
            />

            <TextField
                value={endereco}
                onChange={evento => {
                    setEndereco(evento.target.value)
                }} 
                id="endereco" 
                label="Endereço" 
                type="text" 
                fullWidth 
                margin='normal' 
                required
            />

            <TextField
                value={numero}
                onChange={evento => {
                    setNumero(evento.target.value)
                }}
                id="numero" 
                label="Numero" 
                type="number" 
                margin='normal' 
                required
            />

            <TextField
                value={estado}
                onChange={evento => {
                    setEstado(evento.target.value)
                }}
                id="estado" 
                label="Estado" 
                type="text" 
                margin='normal' 
                required
            />

             <TextField 
                value={cidade}
                onChange={evento => {
                    setCidade(evento.target.value)
                }}
                id="cidade" 
                label="Cidade" 
                type="text" 
                margin='normal' 
                required
            />

            <Button variant="contained" type="submit" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}

export default DadosEntrega
