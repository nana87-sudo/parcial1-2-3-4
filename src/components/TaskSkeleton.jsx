function TaskSkeleton({ count = 3 }) {
  return (
    <ul className="task-list" aria-busy="true" aria-label="Cargando tareas">
      {Array.from({ length: count }, (_, index) => (
        <li key={index} className="task-item task-item--skeleton">
          <span className="skeleton skeleton--check" />
          <span className="skeleton skeleton--text" />
          <span className="skeleton skeleton--button" />
        </li>
      ))}
    </ul>
  );
}

export default TaskSkeleton;