import { useState } from 'react';

/**
 * Custom hook que encapsula TODA la lógica de negocio de las tareas.
 * La UI solo consume su API pública; no sabe cómo se almacenan los datos.
 */
export function useTasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return false;

    const newTask = {
      id: crypto.randomUUID(),
      title: cleanTitle,
      completed: false,
      createdAt: Date.now(),
    };

    setTasks((previousTasks) => [newTask, ...previousTasks]);
    return true;
  };

  const toggleTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (taskId) => {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  };

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    completedCount,
    pendingCount,
  };
}