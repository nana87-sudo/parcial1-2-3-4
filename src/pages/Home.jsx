import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import ErrorMessage from '../components/ErrorMessage';
import { useTasks } from '../hooks/useTasks';

function Home() {
  const {
    tasks,
    isLoading,
    error,
    clearError,
    addTask,
    toggleTask,
    deleteTask,
    pendingCount,
    completedCount,
  } = useTasks();

  return (
    <>
      <Header pendingCount={pendingCount} completedCount={completedCount} />

      <main className="main">
        <ErrorMessage message={error} onDismiss={clearError} />
        <TaskForm onAddTask={addTask} />
        <TaskList
          tasks={tasks}
          isLoading={isLoading}
          onToggleTask={toggleTask}
          onDeleteTask={deleteTask}
        />
      </main>
    </>
  );
}

export default Home;