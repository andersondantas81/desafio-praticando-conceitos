/* eslint-disable no-constant-condition */
import { ITask } from "../App";
import styles from "./task.module.css";
import { Trash, Check } from "phosphor-react";

interface Props {
  task: ITask
  onComplete: (id: string) => void;
  onDeletePost: (id: string) => void;
}

export function Task(props: Props) {
  console.log(props);
  function handleDeletePost() {
    props.onDeletePost(props.task.id);
  }
  
  function handleCheckPost() {
    props.onComplete(props.task.id);
  }

  return (
    <div className={styles.container}>
      <button onClick={handleCheckPost} className={styles.buttonCheck}>
        { props.task.isCompleted ? <Check size={20} color={"#ffffff"} weight={"bold"} /> : <div />}
      </button>

      <p>
        {props.task.title}
      </p>

      <button onClick={handleDeletePost} className={styles.excluirButton}>
        <Trash size={20} />
      </button>
    </div>
  );
}


