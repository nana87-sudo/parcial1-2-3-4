import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__icon">📝</p>
        <p className="empty-state__text">
          Aún no tienes tareas. ¡Agrega la primera y empieza a avanzar!
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;