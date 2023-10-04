import taskStyles from './css/Task.module.css';

import trashIcon from '../assets/trash.svg';

export function Task() {

  const checkboxMargin = document.querySelector('.checkboxMargin');
  console.log(checkboxMargin + 'oi')

  return (
    <li className={taskStyles.container}>
      <div className={taskStyles.contentTask}>
        <div className={taskStyles.checkboxContainer}>
          <span className={taskStyles.checkboxMargin}>
            <input type="checkbox" name="task1" value="task" id='task1' className={taskStyles.checkbox}/>
          </span>
        </div>
        <label htmlFor="task1">
          1. Coletar dados de progresso de todas as equipes.
          2. Analisar os dados e identificar tendências.
          3. Preparar gráficos e visualizações para o relatório.
          4. Escrever um resumo das conclusões e recomendações.
          5. Revisar e finalizar o relatório antes do prazo.
        </label>
        <img src={trashIcon} alt="Excluir tarefa" id={taskStyles.trashIcon}/>
      </div>
    </li>
  )
}