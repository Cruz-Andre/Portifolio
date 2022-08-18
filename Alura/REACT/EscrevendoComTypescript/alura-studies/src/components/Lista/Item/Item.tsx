import { Itarefa } from '../../../types/ITarefa'
import style from './Item.module.scss'

interface Props extends Itarefa {
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}


function Item({ tarefa, tempo, selecionado, completado, id, selecionaTarefa }: Props) {
    //console.log('item atual: ', { tarefa, tempo, selecionado, completado, id, selecionaTarefa })
    return (
        <li 
            className={`${style["item"]} ${selecionado ? style["itemSelecionado"] : ''} ${completado ? style["itemCompletado"] : ''}`} 
            onClick={() => !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id,
                }
            )}>
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
            {/* renderização condicional */}
            {completado && <span className={style["concluido"]} aria-label='tarefa completada'></span>}
        </li>
    )
}

export default Item
