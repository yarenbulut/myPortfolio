import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import memojiAvatar from '../../assets/memoji.PNG';
import './style.css';

const Home = () => {
  return (
    <section className="hero-section">
      <div className="row align-items-center mx-0">
        <div className="col-lg-6 fade-in-up">
          <div className="mb-4">
            <p className="mb-0 text-secondary">Hi there 👋 I'm</p>
            <h1 className="hero-title">Yaren Bulut</h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
          </div>
          <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
            I'm a Computer Engineer specializing in building exceptional digital experiences. Currently focused on building responsive full-stack web applications.
          </p>
          <div className="d-flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/projects" className="hero-btn hero-btn-primary">
                View Projects
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/contact" className="hero-btn hero-btn-secondary">
                Contact Me
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
          <img 
            src={memojiAvatar}
            alt="Memoji Avatar" 
            style={{ 
              maxWidth: '80%',
              height: 'auto',
              filter: 'drop-shadow(0 0 20px rgba(74, 222, 128, 0.2))'
            }} 
            className="bounce-slight"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
