import { useState } from 'react';
import Spinner from './Spinner';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const wasAdded = await onAddTask(title);
    setIsSubmitting(false);
    if (wasAdded) setTitle('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        className="task-form__input"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="¿Qué necesitas hacer hoy?"
        aria-label="Título de la nueva tarea"
        maxLength={120}
        disabled={isSubmitting}
      />
      <button
        className="btn btn--primary"
        type="submit"
        disabled={!title.trim() || isSubmitting}
      >
        {isSubmitting ? <Spinner /> : 'Agregar'}
      </button>
    </form>
  );
}

export default TaskForm;