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
            <NavLink to={'/projects'}>Proyectos</NavLink>
          </li>
          <li>
            <NavLink to={'/techs'}>Tecnologías</NavLink>
          </li>
          <li>
            <NavLink to={'/about'}>Sobre mi</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
