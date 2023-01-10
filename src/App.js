import { useState } from "react";
import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  // App listen global events
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Consulta Médica",
      day: "10 de Janeiro as 10:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Curso",
      day: "15 de Janeiro as 10:30am",
      reminder: false,
    },
    {
      id: 3,
      text: "Prova",
      day: "12 de Janeiro as 09:30am",
      reminder: true,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1   // Simula banco dados gerando id
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Redux is better (have study)
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "Boa, você não tem tarefas pendentes!"
      )}
    </div>
  );
}

export default App;
