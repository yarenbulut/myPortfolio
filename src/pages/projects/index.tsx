import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "🧠 AI-Driven JPEG Steganalysis",
      description: "Deep learning-based JPEG steganalysis pipeline combining spatial and frequency domain features using SEResNet18 and DCTResNet.",
      features: [
        "Dual-branch model: SEResNet18 + DCTResNet",
        "Channel attention with SE blocks",
        "CutMix + MixUp augmentations on Y-channel",
        "Class-balanced sampling & cosine LR scheduling",
        "Multi-head classification with late fusion"
      ],
      technologies: [
        "Python",
        "PyTorch",
        "Vision Transformers",
        "ResNet",
        "CUDA",
        "Deep Learning"
      ],
      type: "Research Project",
      github: "https://github.com/yarenbulut/steganalysis",
      status: "Completed"
    },
    {
      title: "📱 DigiDiet – Smart Diet Planner",
      description: "A smart and interactive mobile application that helps users maintain a healthy lifestyle by offering personalized diet tracking and real-time nutritional guidance. DigiDiet connects users with professional dietitians and allows for flexible, local data-driven usage without requiring internet connectivity.",
      features: [
        "Personalized Profiles with BMI and Daily Calorie Needs",
        "Dietitian Appointment Booking with Day & Time Selection",
        "Real-time Calorie Tracking via Selected Food Items",
        "Nutrition Summary and Water Intake Monitoring",
        "Fully Reactive UI with Jetpack Compose"
      ],
      technologies: [
        "Kotlin",
        "Android Jetpack Compose",
        "Room (SQLite ORM)",
        "ViewModel & Navigation",
        "Material Design 3",
        "MVVM Architecture"
      ],
      type: "Mobile Health Application",
      status: "Completed"
    },
    {
      title: "🚄 FastTrain System",
      description: "A full-featured web application for booking high-speed train tickets. Built with React + TypeScript frontend and Spring Boot (Java) + MySQL backend. This project simulates a real-life ticket booking system with role-based access control.",
      features: [
        "User Module: Login, signup, password recovery, and personalized dashboard",
        "Ticket Management: Browse journeys, view prices, select seats, and make secure payments",
        "Admin Controls: User approval system, journey management, and ticket modifications",
        "Manager Dashboard: Complete employee management system",
        "Interactive UI: Real-time updates and responsive design"
      ],
      technologies: [
        "React",
        "TypeScript",
        "TailwindCSS",
        "Spring Boot",
        "Java 17+",
        "MySQL",
        "Maven",
        "REST API"
      ],
      type: "Full Stack Web Application",
      github: "https://github.com/yarenbulut/fastTrain-sytem",
      status: "Completed"
    },
    {
      title: "✈️ Travel Site",
      description: "A fully responsive, multi-page travel landing website showcasing dream destinations, luxury hotels and travel tips. Features include a hero carousel, coupon-based travel ideas, scenic beach destinations, luxury hotel cards, and a contact form.",
      features: [
        "Hero carousel with global travel teasers",
        "Coupon-based travel idea exploration with imagery",
        "Card grid of scenic beach destinations",
        "Luxury hotel cards with Book Now CTA",
        "Bootstrap contact form with validation",
        "Sticky navbar with off-canvas mobile menu",
        "Page-specific hero sections with full-bleed backgrounds"
      ],
      technologies: [
        "HTML5",
        "Bootstrap 5.3",
        "CSS3",
        "Font Awesome 6",
        "Responsive Design"
      ],
      type: "Frontend Development",
      github: "https://github.com/yarenbulut/travel-web-project",
      status: "Completed"
    },
    {
      title: "Cinema Management System",
      description: "A comprehensive Cinema Management System inspired by platforms like Cinemaximum. Features include ticket booking, session management, and administrative controls.",
      features: [
        "Movie Selection & Showtimes with poster previews",
        "Dynamic Seat Booking with real-time availability",
        "Multi-role Access System for Cashiers, Managers, and Admins",
        "Integrated Payment System with receipt generation",
        "Modern UI Design with JavaFX SceneBuilder"
      ],
      technologies: [
        "Java 17+",
        "JavaFX",
        "MySQL",
        "SceneBuilder",
        "FXML",
        "MVC Architecture"
      ],
      type: "Full Stack Desktop Application",
      github: "https://github.com/yarenbulut/cinemamanagemntsystem",
      status: "Completed"
    },
    {
      title: "Employee Management System",
      date: "December 2023",
      description: "Java-based application for employee information management with authentication, role assignments, and sorting algorithms.",
      technologies: ["Java", "MySQL", "JDBC", "Git"],
      type: "Backend Development"
    },
    {
      title: "Roman Empire Political Hierarchy",
      date: "April 2023",
      description: "Simulation of Roman political hierarchy with role management, stress testing, and penalty calculations for unfilled positions.",
      technologies: ["C++", "Simulation", "Resource Monitoring"],
      type: "System Design"
    },
    {
      title: "🛒 Heytigo – Custom Shopify Theme Development",
      description: "Built a dynamic product recommendation module and customized cart drawer logic using Shopify’s Liquid template engine. Implemented responsive design and reusable sections for Heytigo, a modern e-commerce website.",
      features: [
        "Dynamic product recommendation module",
        "Custom cart drawer logic with Liquid",
        "Reusable and modular section components",
        "Fully responsive design for all devices",
        "Optimized for performance and scalability"
      ],
      technologies: [
        "Shopify",
        "Liquid",
        "SCSS",
        "JavaScript",
        "Custom Components"
      ],
      type: "E-commerce Theme Development",
      status: "Completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="projects-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <motion.div
              variants={itemVariants}
              className="section-header"
            >
              <h2 className="gradient-text display-4 fw-bold mb-4">Projects</h2>
              <p className="lead text-white-50 mx-auto" style={{ maxWidth: '800px' }}>
                Here are some of my featured projects that showcase my expertise in full-stack development,
                AI/ML, and software architecture.
              </p>
            </motion.div>
          </Col>
        </Row>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col lg={6} key={index}>
              <motion.div
                variants={itemVariants}
                className="project-card"
              >
                <div className="project-content">
                  <div>
                    <div className="card-header">
                      <div className="card-title-section">
                        <h3 className="card-title">{project.title}</h3>
                        <div className="badge-container">
                          <span className="badge bg-accent">{project.type}</span>
                          {project.status && (
                            <span className={`badge ${project.status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>
                              {project.status}
                            </span>
                          )}
                        </div>
                      </div>
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="github-link"
                          aria-label="View project on GitHub"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                      )}
                    </div>

                    <p className="project-description">{project.description}</p>

                    {project.features && (
                      <div className="mb-4">
                        <h4 className="h5 text-white mb-3">Key Features:</h4>
                        <ul className="feature-list">
                          {project.features.map((feature, i) => (
                            <li key={i}>
                              <span className="feature-bullet">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {project.technologies && (
                    <div className="tech-stack">
                      <h4 className="h5 text-white mb-3">Technologies Used:</h4>
                      <div className="d-flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.div>
  );
};

export default Projects; 