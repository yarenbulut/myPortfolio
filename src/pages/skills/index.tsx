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
        { name: 'Bootstrap', icon: 'fab fa-bootstrap', link: 'https://getbootstrap.com' }
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'C', link: 'https://en.cppreference.com/w/c' },
        { name: 'C++', link: 'https://isocpp.org' },
        { name: 'Java', icon: 'fab fa-java', link: 'https://www.java.com/' },
        { name: 'Python', icon: 'fab fa-python', link: 'https://www.python.org/' },
        { name: 'Node.js', icon: 'fab fa-node-js', link: 'https://nodejs.org' }
      ]
    },
    {
      category: 'Operating Systems',
      items: [
        { name: 'Linux', icon: 'fab fa-linux', link: 'https://www.linux.org/' },
        { name: 'Windows', icon: 'fab fa-windows', link: 'https://www.microsoft.com/windows' },
        { name: 'macOS', icon: 'fab fa-apple', link: 'https://www.apple.com/macos' }
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
    }
  ];

  return (
    <div className="skills-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-5"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="display-4 text-center mb-5 text-gradient"
        >
          Skills
        </motion.h1>
        
        <div className="row g-4">
          {skills.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="col-md-6"
            >
              <div className="skill-category h-100">
                <h2 className="h3 mb-4 text-light">
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
                      {skill.icon && skill.icon.endsWith('.svg') ? (
                        <img src={skill.icon} alt={skill.name + ' icon'} className="skill-icon" style={{ marginBottom: '0.5rem' }} />
                      ) : skill.icon ? (
                        <i className={`${skill.icon} skill-icon`} style={{ marginBottom: '0.5rem' }}></i>
                      ) : null}
                      <span className="skill-name">{skill.name}</span>
                    </motion.a>
                  ))}
                    </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 