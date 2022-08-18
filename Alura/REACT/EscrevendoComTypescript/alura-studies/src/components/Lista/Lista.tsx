import { Itarefa } from '../../types/ITarefa'
import Item from './Item/Item'
import style from './Lista.module.scss'

interface Props {
    tarefas: Itarefa[],
    selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props) {
    return (
        <aside className={style["listaTarefas"]}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item
                        key={item.id} 
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                        selecionaTarefa={selecionaTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista
