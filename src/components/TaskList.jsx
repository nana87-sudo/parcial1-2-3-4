import TaskItem from './TaskItem';
import TaskSkeleton from './TaskSkeleton';

function TaskList({ tasks, isLoading, onToggleTask, onDeleteTask }) {
  if (isLoading) return <TaskSkeleton />;

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