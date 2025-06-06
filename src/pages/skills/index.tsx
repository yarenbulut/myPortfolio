import { motion } from 'framer-motion';
import './style.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'ReactJS', icon: '/icons/react.svg', link: 'https://reactjs.org' },
        { name: 'JavaScript', icon: '/icons/javascript.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'NextJS', icon: '/icons/nextjs.svg', link: 'https://nextjs.org' },
        { name: 'CSS', icon: '/icons/css.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'Angular', icon: '/icons/angular.svg', link: 'https://angular.io' },
        { name: 'Bootstrap', icon: '/icons/bootstrap.svg', link: 'https://getbootstrap.com' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'NodeJS', icon: '/icons/nodejs.svg', link: 'https://nodejs.org' },
        { name: 'Rails', icon: '/icons/rails.svg', link: 'https://rubyonrails.org' },
        { name: 'MongoDB', icon: '/icons/mongodb.svg', link: 'https://www.mongodb.com' },
        { name: 'C++', icon: '/icons/cpp.svg', link: 'https://isocpp.org' }
      ]
    }
  ];

  return (
    <div className="skills-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto py-16 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Skills
        </motion.h1>
        
        <div className="skills-grid">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="skill-category"
            >
              <h2 className="text-2xl font-semibold mb-6 text-gray-300">
                {category.category}
              </h2>
              <div className="skills-icons-grid">
                {category.items.map((skill, skillIndex) => (
                  <motion.a
                    key={skillIndex}
                    href={skill.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="skill-item"
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <span className="skill-name">{skill.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 