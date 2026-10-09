function Header({ pendingCount, completedCount }) {
  return (
    <header className="header">
      <h1 className="header__title">TaskFlow</h1>
      <p className="header__subtitle">
        Organiza tu día, prioriza lo importante y alcanza tus metas.
      </p>

      <div className="header__stats" aria-live="polite">
        <span className="badge badge--pending">
          {pendingCount} {pendingCount === 1 ? 'pendiente' : 'pendientes'}
        </span>
        <span className="badge badge--done">
          {completedCount} {completedCount === 1 ? 'completada' : 'completadas'}
        </span>
      </div>
    </header>
  );
}

export default Header;