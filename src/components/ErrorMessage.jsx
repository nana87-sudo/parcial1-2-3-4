function ErrorMessage({ message, onDismiss }) {
  if (!message) return null;

  return (
    <div className="error-banner" role="alert">
      <span>{message}</span>
      <button className="error-banner__close" type="button" onClick={onDismiss}>
        Cerrar
      </button>
    </div>
  );
}

export default ErrorMessage;