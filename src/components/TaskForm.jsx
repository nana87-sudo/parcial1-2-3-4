import { useState } from 'react';

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const wasAdded = onAddTask(title);
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
      />
      <button
        className="btn btn--primary"
        type="submit"
        disabled={!title.trim()}
      >
        Agregar
      </button>
    </form>
  );
}

export default TaskForm;