import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { useTasks } from './hooks/useTasks';

function App() {
  const {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    pendingCount,
    completedCount,
  } = useTasks();

  return (
    <div className="app">
      <Header pendingCount={pendingCount} completedCount={completedCount} />

      <main className="main">
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </div>
  );
}

export default App;