import { Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { pageTransitions } from '../animations/pageTransition';
import { ThemeChanger } from './ThemeChanger';

export const Footer = () => {
  return (
    <motion.footer initial={pageTransitions.initial} animate={pageTransitions.animate} exit={pageTransitions.exit}>
      <div>
        <p>
          Design inspired in
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
      <div className="copyright-container">
        <p className="copyright">
          &copy; 2025 David Gonzalez de la Rosa<span>|</span>
        </p>
        <ThemeChanger />
      </div>
    </motion.footer>
  );
};
