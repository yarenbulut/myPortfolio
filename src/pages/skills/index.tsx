import { motion } from 'framer-motion';
import './style.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend Development',
      items: [
        { name: 'JavaScript', level: 90, icon: 'bi bi-filetype-js', color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, icon: 'bi bi-filetype-ts', color: '#3178C6' },
        { name: 'React', level: 90, icon: 'bi bi-filetype-jsx', color: '#61DAFB' },
        { name: 'HTML5', level: 95, icon: 'bi bi-filetype-html', color: '#E34F26' },
        { name: 'CSS3', level: 95, icon: 'bi bi-filetype-css', color: '#1572B6' },
        { name: 'Bootstrap', level: 90, icon: 'bi bi-bootstrap', color: '#7952B3' },
        { name: 'Tailwind CSS', level: 80, icon: 'bi bi-wind', color: '#38B2AC' },
      ],
    },
    {
      category: 'Backend Development',
      items: [
        { name: 'Python', level: 85, icon: 'bi bi-filetype-py', color: '#3776AB' },
        { name: 'Java', level: 80, icon: 'bi bi-filetype-java', color: '#007396' },
        { name: 'C/C++', level: 75, icon: 'bi bi-filetype-c', color: '#00599C' },
        { name: 'Node.js', level: 80, icon: 'bi bi-filetype-js', color: '#339933' },
        { name: 'Express.js', level: 75, icon: 'bi bi-filetype-js', color: '#000000' },
        { name: 'Spring Boot', level: 70, icon: 'bi bi-spring', color: '#6DB33F' },
      ],
    },
    {
      category: 'Database & ORM',
      items: [
        { name: 'SQL', level: 85, icon: 'bi bi-database', color: '#4479A1' },
        { name: 'MongoDB', level: 80, icon: 'bi bi-database', color: '#47A248' },
        { name: 'PostgreSQL', level: 75, icon: 'bi bi-database', color: '#336791' },
        { name: 'Prisma', level: 70, icon: 'bi bi-database', color: '#2D3748' },
        { name: 'Mongoose', level: 75, icon: 'bi bi-database', color: '#880000' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      items: [
        { name: 'AWS', level: 75, icon: 'bi bi-cloud', color: '#FF9900' },
        { name: 'EC2', level: 70, icon: 'bi bi-hdd-network', color: '#FF9900' },
        { name: 'S3', level: 70, icon: 'bi bi-hdd-stack', color: '#FF9900' },
        { name: 'Docker', level: 75, icon: 'bi bi-box', color: '#2496ED' },
        { name: 'Git', level: 85, icon: 'bi bi-git', color: '#F05032' },
        { name: 'CI/CD', level: 70, icon: 'bi bi-arrow-repeat', color: '#2088FF' },
      ],
    },
    {
      category: 'Machine Learning & AI',
      items: [
        { name: 'PyTorch', level: 70, icon: 'bi bi-cpu', color: '#EE4C2C' },
        { name: 'TensorFlow', level: 65, icon: 'bi bi-cpu', color: '#FF6F00' },
        { name: 'Scikit-learn', level: 75, icon: 'bi bi-graph-up', color: '#F7931E' },
      ],
    },
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
          Technical Skills
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="grid grid-cols-1 gap-4">
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="skill-card"
                    style={{ '--skill-color': skill.color } as React.CSSProperties}
                  >
                    <div className="skill-card-content">
                      <div className="skill-icon-wrapper">
                        <i className={`${skill.icon} skill-icon`} style={{ color: skill.color }}></i>
                      </div>
                      <div className="skill-info">
                        <h3 className="skill-name">{skill.name}</h3>
                        <div className="skill-level">
                          <div className="skill-level-bar">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                              className="skill-level-progress"
                            />
                          </div>
                          <span className="skill-level-text">{skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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