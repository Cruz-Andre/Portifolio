import React from 'react';
import { extratoLista } from '../../info';
import Itens from '../Itens';
import { Botao, Box } from '../UI';


const Extrato = () => {
    return (
        <Box>
            {
                extratoLista.updates.map(({id, type, from, value, date}) => {
                    return(
                        <Itens  key={id} type={type} from={from} value={value} date={date}/>
                    )
                })
            }
            <Botao>Ver Mais</Botao>
        </Box>
        
    )
}

export default Extrato
