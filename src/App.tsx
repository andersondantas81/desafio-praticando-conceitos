import "./global.css";
import { Header } from "./components/Header";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
import { Task } from "./components/Task";
import { useState } from "react";
import { ClipboardText, PlusCircle } from "phosphor-react";

export interface ITask {
  id: string;
  title:  string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newPostText, setNewPostText] = useState('');
  const [concluded, setConcluded] = useState(0);

  function handleCreateNewTask() {
    event?.preventDefault();

    setTasks([...tasks, {
      id: uuidv4(),
      title: newPostText,
      isCompleted: false,
    },]);
    setNewPostText('');
  }

  function handleNewPostChange() {
    setNewPostText((event?.target as  HTMLInputElement).value);
  }

  function deletePost(id: string) {
    const taskDeletada = tasks.filter(task => task.id !== id);
    taskDeletada && setTasks(taskDeletada);
  }

  function completePost(id: string) {
    const newTasks  = tasks.map(task => {
      if (task.id === id) {
        if (task.isCompleted) {
          if (concluded !== 0) {
            setConcluded(concluded - 1)
          }     
        } else {
            setConcluded(concluded + 1);
        } 
        return {
          ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <header>
          <form onSubmit={handleCreateNewTask}>
            <input
              name="post"
              value={newPostText}
              placeholder="Adicione uma nova tarefa"
              onChange={handleNewPostChange}
              required
            />
            <button type="submit">
              Criar <PlusCircle size={20} weight="bold" />
            </button>
          </form>
        </header>
        <main>
          <div className={styles.info}>
            <div>
              <strong>Tarefas criadas</strong>
              <span>{tasks.length}</span>
            </div>
            <div>
              <strong>Concluídas</strong>
              <span>{`${concluded} de ${tasks.length}`}</span>
            </div>
          </div>

          {tasks.length === 0 ? (
            <div className={styles.tasksEmpty}>
              <ClipboardText size={40} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          ) : (
            <div className={styles.task}>
              {tasks.map((task) => {
                return <Task 
                  key={task.id}
                  task={task} 
                  onDeletePost={deletePost}
                  onComplete={completePost} />;
              })}
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
