import buttonStyles from "./css/CreateTaskButton.module.css";

import addIcon from "../assets/addIcon.svg";

import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { createNewTask } from "../services/apiServices";

export function CreateTaskButton() {

  const [contentTask, setContentTask] = useState('');
  const sessionID =  localStorage.getItem('session');

  function handleCreateTask(event: FormEvent) {
    event.preventDefault();
    if(sessionID) {
      createNewTask(sessionID, contentTask);
    }
    setContentTask('');
  }

  function handleContentNewTask(event: ChangeEvent<HTMLInputElement> ) {
    event.target.setCustomValidity('');
    setContentTask(event.target.value); 
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Por favor, insira uma nova tarefa.')
  }

  const isNewTaskEmpty = contentTask.length === 0;

  return (
    <form
      action=""
      onSubmit={handleCreateTask}
      method="post"
      className={buttonStyles.contentBox}
      id="formTask"
      autoComplete="off"
    >
      <input
        type="text"
        value={contentTask}
        className={buttonStyles.addTask}
        id={buttonStyles.inputTask}
        name="addTask"
        required
        placeholder="Adicione uma nova tarefa"
        form="formTask"
        onChange={handleContentNewTask}
        onInvalid={handleNewTaskInvalid}
        autoComplete="off"
      />

      <button
        type="submit"
        className={buttonStyles.addTask}
        id={buttonStyles.createButton}
        aria-label="Adicionar uma nova tarefa"
        disabled={isNewTaskEmpty}
      >
        Criar
        <img src={addIcon} />
      </button>
    </form>
  );
}
