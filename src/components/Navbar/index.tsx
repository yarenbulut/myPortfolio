import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex space-x-8">
      {/* Ana menü */}
      <Link
        to="/"
        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
        ${location.pathname === '/' 
          ? 'border-indigo-500 text-gray-900' 
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`}
      >
        <motion.span whileHover={{ y: -1 }}>Home</motion.span>
      </Link>

      <Link
        to="/aboutme"
        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
        ${location.pathname === '/aboutme'
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`}
      >
        <motion.span whileHover={{ y: -1 }}>About</motion.span>
      </Link>

      <Link
        to="/projects"
        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
        ${location.pathname === '/projects'
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`}
      >
        <motion.span whileHover={{ y: -1 }}>Projects</motion.span>
      </Link>

      <Link
        to="/skills"
        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
        ${location.pathname === '/skills'
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`}
      >
        <motion.span whileHover={{ y: -1 }}>Skills</motion.span>
      </Link>

      <Link
        to="/contact"
        className={`inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
        ${location.pathname === '/contact'
          ? 'border-indigo-500 text-gray-900'
          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
        }`}
      >
        <motion.span whileHover={{ y: -1 }}>Contact</motion.span>
      </Link>

      {/* Sosyal medya */}
      <div className="flex items-center space-x-4 ml-8 border-l pl-8">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <motion.span whileHover={{ y: -1 }} className="text-sm">
            GitHub
          </motion.span>
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-gray-700"
        >
          <motion.span whileHover={{ y: -1 }} className="text-sm">
            LinkedIn
          </motion.span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar; 