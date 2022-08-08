import React, { useState, useContext } from 'react'
import { Button, FormControlLabel, Switch, TextField } from '@mui/material'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro.js'
import useErros from '../../hooks/useErros.js'

//ao inves de props foi por desconstrução
function DadosPessoais({aoEnviar}) {
    
    const [nome, setNome] = useState("") //<----declaração
    /**
     * outra maneira de montar o useState
     * const array = useState("")
     * const nome = array[0]
     * const setNome = array[1]
     */

    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCpf] = useState("")
    const [promocoes, setPromocoes] = useState(true)
    const [novidades, setNovidades] = useState(false)
    
    const validacoes = useContext(ValidacoesCadastro)

    const [erros, validarCampos, possoEnviar] = useErros(validacoes)

    return (
        <form 
            onSubmit={evento => {
                evento.preventDefault()
                if(possoEnviar()) {
                    //por desconstrução
                    aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
                    //com props.aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
                    
                    //console.log({nome, sobrenome, cpf, promocoes, novidades})
                }
            }}
        >
            <TextField
                value={nome} //<---atribuição
                onChange={evento => {
                    setNome(evento.target.value)
                }}
                id='nome'
                name='nome'
                label='Nome'
                fullWidth
                margin='normal'
                required
            />

            <TextField 
                value={sobrenome}
                onChange={evento => {
                    setSobrenome(evento.target.value)
                }}
                id='sobrenome' 
                name='sobrenome'
                label='Sobrenome' 
                fullWidth 
                margin='normal' 
                required
            />

            <TextField
                value={cpf}
                onChange={evento => {
                    setCpf(evento.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='cpf' 
                name='cpf'
                label='CPF' 
                fullWidth 
                margin='normal' 
                required
            />

            <FormControlLabel
                label='Promoções'
                control={
                    <Switch
                        checked={promocoes} 
                        onChange={evento => {
                            setPromocoes(evento.target.checked)
                        }} 
                        name='promocoes' 
                    />
                } 
                
            />

            <FormControlLabel
                label='Novidades'
                control={
                    <Switch
                        checked={novidades} 
                        onChange={evento => {
                            setNovidades(evento.target.checked)
                        }} 
                        name='novidades'
                    />
                } 
            />

            <Button variant="contained" type='submit'>Próximo</Button>
        </form>
    )
}

export default DadosPessoais
