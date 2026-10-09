const TECH_STACK = [
  { name: 'React', role: 'Interfaz con componentes funcionales y Hooks' },
  { name: 'Firebase Firestore', role: 'Base de datos NoSQL en tiempo real' },
  { name: 'React Router DOM', role: 'Navegación SPA sin recargas' },
  { name: 'CSS puro', role: 'Diseño mobile-first con variables, Flexbox y Grid' },
  { name: 'Netlify', role: 'Despliegue continuo desde GitHub' },
];

function About() {
  return (
    <main className="about">
      <h1 className="about__title">Acerca de TaskFlow</h1>
      <p className="about__text">
        TaskFlow es una aplicación de gestión de tareas desarrollada como
        proyecto académico por <strong>TU NOMBRE</strong>. Aplica una arquitectura por capas:
        la interfaz vive en componentes, la lógica en hooks y el acceso a
        datos en servicios.
      </p>

      <h2 className="about__subtitle">Tecnologías</h2>
      <ul className="about__list">
        {TECH_STACK.map((tech) => (
          <li key={tech.name} className="about__item">
            <strong>{tech.name}</strong>
            <span>{tech.role}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default About;