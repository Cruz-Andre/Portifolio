import React, { useState, useEffect } from 'react'
import { Step, StepLabel, Stepper, Typography } from '@mui/material'
import DadosEntrega from './DadosEntrega.jsx'
import DadosPessoais from './DadosPessoais.jsx'
import DadosUsuario from './DadosUsuario.jsx'

//ao inves de props foi por desconstrução
function FormularioCadastro({aoEnviar}) {
    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDadosColetados] = useState({})
    
    useEffect(() => {
        //o menos 1 (-1) é para enviar o formulario e depois apresentar a mensagem de obrigado
        if(etapaAtual === formularios.length - 1) {
            aoEnviar(dadosColetados);
        }
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados}/>, 
        <DadosPessoais aoEnviar={coletarDados}/>, 
        <DadosEntrega aoEnviar={coletarDados}/>,
        <Typography variant='h5'>Cadastro finalizado</Typography>
    ]
    
    function coletarDados(dados) {
        setDadosColetados({...dadosColetados, ...dados})
        proximaEtapa()
    }

    function proximaEtapa() {
        setEtapaAtual(etapaAtual + 1)
    }
    
    return (
        <>
        <Stepper activeStep={etapaAtual}>
            <Step><StepLabel>Login</StepLabel></Step>
            <Step><StepLabel>Pessoal</StepLabel></Step>
            <Step><StepLabel>Entrega</StepLabel></Step>
            <Step><StepLabel>Finalização</StepLabel></Step>
        </Stepper>
            {formularios[etapaAtual]}
        </>
    )
}

export default FormularioCadastro
