import Botao from "../Botao/Botao"
import Relogio from "./Relogio/Relogio"
import style from "./Cronometro.module.scss"
import { tempoParaSegundos } from "../../common/utils/Tempo"
import { Itarefa } from "../../types/ITarefa"
import { useEffect, useState } from "react"

interface Props {
    selecionado: Itarefa | undefined,
    finalizarTarefa: () => void
}

function Cronometro({selecionado, finalizarTarefa}: Props) {
    //console.log('Conversão: ', tempoParaSegundos('01:01:01'))
    const [tempo, setTempo] = useState<number>()

    useEffect(() => {
        if(selecionado?.tempo) {
            setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])

    function regressiva(contador: number = 0) {
        setTimeout(() => {
            if(contador > 0) {
                setTempo(contador - 1)
                return regressiva(contador - 1)
            }
            finalizarTarefa()
        }, 1000)
    }
 
    return(
        <div className={style["cronometro"]}>
            <p className={style["titulo"]}>Escolha um card e inicie o cronômetro</p>
            <div className={style["relogioWrapper"]}>
                <Relogio tempo={tempo}/>
            </div>
            <Botao onClick={() => regressiva(tempo)}>
                Começar
            </Botao>
        </div>
    )
}

export default Cronometro