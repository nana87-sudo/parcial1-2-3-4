import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from 'firebase/firestore';
import { db } from './firebase';

const TASKS_COLLECTION = 'tasks';
const tasksRef = collection(db, TASKS_COLLECTION);

/**
 * Suscripción en tiempo real. Devuelve la función para cancelar la suscripción.
 */
export function subscribeToTasks(onData, onError) {
  const tasksQuery = query(tasksRef, orderBy('createdAt', 'desc'));

  return onSnapshot(
    tasksQuery,
    (snapshot) => {
      const tasks = snapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
      onData(tasks);
    },
    onError
  );
}

export function createTask(title) {
  return addDoc(tasksRef, {
    title,
    completed: false,
    createdAt: serverTimestamp(),
  });
}

export function updateTaskStatus(taskId, completed) {
  return updateDoc(doc(db, TASKS_COLLECTION, taskId), { completed });
}

export function removeTask(taskId) {
  return deleteDoc(doc(db, TASKS_COLLECTION, taskId));
}