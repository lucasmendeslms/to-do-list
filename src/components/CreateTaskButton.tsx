import buttonStyles from './css/CreateTaskButton.module.css'

import addIcon from '../assets/addIcon.svg'

export function CreateTaskButton() {
  return (
    <form action='' method='post' className={buttonStyles.contentBox}>
      <input type="text" className={buttonStyles.addTask} id={buttonStyles.inputTask} name="addTask" required placeholder='Adicione uma nova tarefa'/>
      <button type="submit" className={buttonStyles.addTask} id={buttonStyles.createButton}aria-label='Adicionar uma nova tarefa'>
        <span>Criar</span>
        <img src={addIcon}/>
      </button>
    </form>
  )
}