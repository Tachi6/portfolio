import { NavLink } from 'react-router';

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to={'/'}>Portada</NavLink>
          </li>
          <li>
            <NavLink to={'/settings'}>Proyectos</NavLink>
          </li>
          <li>
            <NavLink to={'/rules'}>Tecnologias</NavLink>
          </li>
          <li>
            <NavLink to={'/records'}>Sobre mi</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
