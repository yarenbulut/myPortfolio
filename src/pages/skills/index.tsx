import { motion } from 'framer-motion';
import './style.css';
import React from 'react';

// Import icons
import ReactIcon from '/icons/react.svg';
import JavaScriptIcon from '/icons/javascript.svg';
import NextJSIcon from '/icons/nextjs.svg';
import CSSIcon from '/icons/css.svg';
import AngularIcon from '/icons/angular.svg';
import BootstrapIcon from '/icons/bootstrap.svg';
import JavaIcon from '/icons/java.svg';
import SpringIcon from '/icons/spring.svg';
import PythonIcon from '/icons/python.svg';
import DjangoIcon from '/icons/django.svg';
import NodeJSIcon from '/icons/nodejs.svg';
import RailsIcon from '/icons/rails.svg';
import KotlinIcon from '/icons/kotlin.svg';
import AndroidIcon from '/icons/android.svg';
import JetpackIcon from '/icons/jetpack.svg';
import FlutterIcon from '/icons/flutter.svg';
import MongoDBIcon from '/icons/mongodb.svg';
import PostgreSQLIcon from '/icons/postgresql.svg';
import MySQLIcon from '/icons/mysql.svg';
import AWSIcon from '/icons/aws.svg';
import DockerIcon from '/icons/docker.svg';
import KubernetesIcon from '/icons/kubernetes.svg';
import CppIcon from '/icons/cpp.svg';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: 'fab fa-react', link: 'https://reactjs.org' },
        { name: 'JavaScript', icon: 'fab fa-js', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'CSS', icon: 'fab fa-css3-alt', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { name: 'HTML5', icon: 'fab fa-html5', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { name: 'Angular', icon: 'fab fa-angular', link: 'https://angular.io' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', link: 'https://getbootstrap.com' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Java', icon: 'fab fa-java', link: 'https://www.java.com/' },
        { name: 'Python', icon: 'fab fa-python', link: 'https://www.python.org/' },
        { name: 'Node.js', icon: 'fab fa-node-js', link: 'https://nodejs.org' },
        { name: 'PHP', icon: 'fab fa-php', link: 'https://www.php.net/' }
      ]
    },
    {
      category: 'Mobile & Desktop',
      items: [
        { name: 'Android', icon: 'fab fa-android', link: 'https://developer.android.com/' },
        { name: 'Apple', icon: 'fab fa-apple', link: 'https://developer.apple.com/' },
        { name: 'Windows', icon: 'fab fa-windows', link: 'https://developer.microsoft.com/' }
      ]
    },
    {
      category: 'Version Control & Tools',
      items: [
        { name: 'Git', icon: 'fab fa-git-alt', link: 'https://git-scm.com/' },
        { name: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/' },
        { name: 'Docker', icon: 'fab fa-docker', link: 'https://www.docker.com/' },
        { name: 'AWS', icon: 'fab fa-aws', link: 'https://aws.amazon.com/' }
      ]
    },
    {
      category: 'Programming Languages',
      items: [
        { name: 'Python', icon: 'fab fa-python', link: 'https://www.python.org/' },
        { name: 'Java', icon: 'fab fa-java', link: 'https://www.java.com/' },
        { name: 'JavaScript', icon: 'fab fa-js', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        { name: 'C++', customIcon: '/icons/cpp.svg', link: 'https://isocpp.org' }
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
                    {skill.customIcon ? (
                      <img
                        src={skill.customIcon}
                        alt={skill.name}
                        className="skill-icon"
                        width="48"
                        height="48"
                      />
                    ) : (
                      <i className={`${skill.icon} skill-icon`}></i>
                    )}
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