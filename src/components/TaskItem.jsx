function TaskItem({ task, onToggle, onDelete }) {
  const itemClass = `task-item ${task.completed ? 'task-item--completed' : ''}`;

  return (
    <li className={itemClass}>
      <label className="task-item__label">
        <input
          className="task-item__checkbox"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className="task-item__title">{task.title}</span>
      </label>

      <button
        className="btn btn--danger"
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label={`Eliminar tarea: ${task.title}`}
      >
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;