import muralStyles from "./css/Mural.module.css";

import listIcon from "../assets/clipboard.svg";

export function Mural() {
  return (
    <section>
      <div className={muralStyles.mural}>
        <header>
          <div className={muralStyles.actions}>
            <span id={muralStyles.createdTasks}>Tarefas criadas</span>
            <span>0</span>
          </div>
          <div className={muralStyles.actions}>
            <span id={muralStyles.doneTasks}>Concluídas</span>
            <span>0</span>
          </div>
        </header>
        <ul className={muralStyles.tasksList}>
          <div className={muralStyles.noTasks}>
            <img src={listIcon} id={muralStyles.listIcon} />
            <p>Você ainda não tem tarefas cadastradas</p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </ul>
      </div>
    </section>
  );
}
