import taskStyles from './css/Task.module.css';

import trashIcon from '../assets/trash.svg';
import { useState } from 'react';

export function Task() {

  const [completed, setCompleted] = useState(false);

  function handleCompletedTasks() {
    setCompleted((state) => {
      return !state;
    });
  }

  const taskStatus = completed ? 'completedTask' : ''; 

  return (
    <li className={taskStyles.container}>
      <div className={`${taskStyles.contentTask} ${taskStyles[taskStatus]}`}>
        <div className={taskStyles.checkboxContainer}> 
          <span className={taskStyles.checkboxMargin}>
            <input type="checkbox" name="task1" value="task" id='task1' className={taskStyles.checkbox} onChange={handleCompletedTasks}/>
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