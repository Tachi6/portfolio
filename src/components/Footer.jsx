import { Link } from 'react-router';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import { pageTransitions } from '../animations/pageTransition';

export const Footer = () => {
  return (
    <motion.footer initial={pageTransitions.initial} animate={pageTransitions.animate} exit={pageTransitions.exit}>
      <p className="copyright">
        &copy; 2025 David Gonzalez de la Rosa<span>|</span>
      </p>
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
        </p>
      </div>
    </motion.footer>
  );
};
