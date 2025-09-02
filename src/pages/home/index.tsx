import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import memojiAvatar from '../../assets/memoji.PNG';
import './style.css';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-up">
              <div className="mb-4">
                <p className="mb-0 text-secondary">Hi there 👋 I'm</p>
                <h1 className="hero-title">Yaren Bulut</h1>
                <h2 className="hero-subtitle">Computer Engineer</h2>
              </div>
              <p className="text-secondary mb-4" style={{ fontSize: '1.1rem' }}>
                I'm a Computer Engineer passionate about AI/ML, full-stack development, and innovative software solutions. With expertise spanning from deep learning and computer vision to web applications and mobile development, I create cutting-edge digital experiences that bridge the gap between complex algorithms and user-friendly interfaces.
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
        </div>
      </section>
      
      {/* Atatürk Quote Section */}
      <motion.section 
        className="quote-section"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <blockquote className="ataturk-quote text-center">
                <p className="quote-text">
                  "Türk mühendislerin alnında, Cumhuriyet istikbalini aydınlatan ışık parlar."
                </p>
                <footer className="quote-author">
                  <cite className="author-name">Mustafa Kemal Atatürk</cite>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
