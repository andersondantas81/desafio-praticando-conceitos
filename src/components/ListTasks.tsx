import { ClipboardText, PlusCircle } from "phosphor-react";
import styles from "./ListTasks.module.css";
import { useState } from "react";
import { Task } from "./Task";
import { v4 as uuidv4 } from 'uuid';

export interface ITask {
  id: string;
  title: string;
}

function handleCreateNewTask() {
  return;
}

export function ListTasks() {
  const tasks = [
    {
      id: uuidv4(),
      title: "teste",
    },
    {
      id: uuidv4(),
      title: "teste2",
    },
  ];

  const [createdTasks, setCreatdTasks] = useState<ITask[]>(tasks);

  return (
    <div className={styles.bodyTasks}>
      <form onSubmit={handleCreateNewTask}>
        <input placeholder="Adicione uma nova tarefa" />
        <button type="submit" onClick={handleCreateNewTask}>
          Criar <PlusCircle size={20} weight="bold" />
        </button>
      </form>
      <div className={styles.info}>
        <div>
          <strong>Tarefas criadas</strong>
          <span>{createdTasks.length}</span>
        </div>
        <div>
          <strong>Concluídas</strong>
          <span>{`${createdTasks.length} de ${createdTasks.length}`}</span>
        </div>
      </div>

      {createdTasks.length === 0 ? (
        <div className={styles.tasksEmpty}>
          <ClipboardText size={40} />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      ) : (
        <div className={styles.task}>
          <Task />
          {/* {createdTasks.map((task) => {
            <Task 
            key = {task.id}
            task = {task} />
          })} */}
        </div>
      )}
    </div>
  );
}
