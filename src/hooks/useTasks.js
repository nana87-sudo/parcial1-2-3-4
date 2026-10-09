import { useState, useEffect } from 'react';
import {
  subscribeToTasks,
  createTask,
  updateTaskStatus,
  removeTask,
} from '../services/taskService';

/**
 * Hook que conecta la UI con Firestore.
 * Expone la misma API que en el Parcial 1, más `isLoading` y `error`.
 */
export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = subscribeToTasks(
      (fetchedTasks) => {
        setTasks(fetchedTasks);
        setIsLoading(false);
      },
      (firestoreError) => {
        console.error(firestoreError);
        setError('No se pudieron cargar las tareas. Revisa tu conexión.');
        setIsLoading(false);
      }
    );

    // Limpieza: evita fugas de memoria al desmontar el componente
    return unsubscribe;
  }, []);

  const runAction = async (action, errorMessage) => {
    try {
      await action();
      return true;
    } catch (actionError) {
      console.error(actionError);
      setError(errorMessage);
      return false;
    }
  };

  const addTask = async (title) => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return false;

    return runAction(
      () => createTask(cleanTitle),
      'No se pudo agregar la tarea. Inténtalo de nuevo.'
    );
  };

  const toggleTask = async (taskId) => {
    const task = tasks.find((item) => item.id === taskId);
    if (!task) return false;

    return runAction(
      () => updateTaskStatus(taskId, !task.completed),
      'No se pudo actualizar la tarea.'
    );
  };

  const deleteTask = (taskId) =>
    runAction(() => removeTask(taskId), 'No se pudo eliminar la tarea.');

  const clearError = () => setError(null);

  const completedCount = tasks.filter((task) => task.completed).length;
  const pendingCount = tasks.length - completedCount;

  return {
    tasks,
    isLoading,
    error,
    clearError,
    addTask,
    toggleTask,
    deleteTask,
    completedCount,
    pendingCount,
  };
}