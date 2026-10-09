import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="about">
      <h1 className="about__title">404</h1>
      <p className="about__text">La página que buscas no existe.</p>
      <Link className="btn btn--primary btn--link" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;