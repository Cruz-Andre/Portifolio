import React, { useState } from 'react';

function useErros(validacoes) {
    const estadoIncial = criarEstadoInicial(validacoes)
    const [erros, setErros] = useState(estadoIncial)
    
    function validarCampos(evento) {
            const {name, value} = evento.target
            const novoEstado = {...erros}
            novoEstado[name] = validacoes[name](value);
            setErros(novoEstado)
    }

    function possoEnviar() {
        for(let campo in erros) {
            if(!erros[campo].valido) {
                return false
            }
        }
        return true
    }

    return [erros, validarCampos, possoEnviar];
}

function criarEstadoInicial(validacoes) {
    const estadoInicial = {}
    for(let campo in validacoes) {
        estadoInicial[campo] = {valido:true, texto:""}
    }
    return estadoInicial
}

export default useErros