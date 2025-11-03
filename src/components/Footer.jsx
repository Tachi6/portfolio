import { Link } from 'react-router';

export const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          Design inspired in{' '}
          <Link to="https://www.figma.com/design/FkD7mvAN9yA2DgMXHSxl9c/Portfolio?m=auto&t=tXDZQODDBsE8oBdp-6">
            Portfolio
          </Link>
          <span>|</span>
        </p>
        <p>
          Powered by
          <Link to="https://react.dev/" target="_blank">
            React
          </Link>
          <span>|</span>
        </p>
      </div>
      <p className="copyright">&copy; 2025 David Gonzalez de la Rosa</p>
    </footer>
  );
};
