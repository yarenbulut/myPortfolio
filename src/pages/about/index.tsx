import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta, dataabout, worktimeline, skills, services } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      period: "October 2024 – Present",
      title: "Junior Front-End Developer",
      company: "York & Chapel (U.S.-based agency)",
      location: "Istanbul, Turkey",
      description: [
        <span key="desc1" dangerouslySetInnerHTML={{
          __html: "Actively contributed to the development and coding of responsive, mobile-friendly websites, including <a href='http://www.samaritanvillage.org/' target='_blank' rel='noopener noreferrer'>SDV Intranet</a>, <a href='https://teedo.com.tr/' target='_blank' rel='noopener noreferrer'>Teedo</a>, and Goldman Gruder & Woods, utilizing HTML, CSS, Bootstrap, and JavaScript."
        }} />,
        "Performed comprehensive QA testing and debugging, ensuring smooth functionality and optimal user experience across multiple projects.",
        "Engaged in ongoing maintenance, development, and enhancement tasks for prominent university websites (NEIU and NPU) in the United States, employing WordPress alongside custom HTML/CSS and JavaScript integrations.",
        "Collaborated closely with backend developers to integrate frontend interfaces effectively, leveraging PHP and MySQL for dynamic content management.",
        "Managed site deployments, hosting configurations, and domain management through platforms like Natro, ensuring reliable and efficient website performance.",
        "Played a key role in optimizing existing web applications, significantly improving load times and overall user engagement through targeted frontend enhancements."
      ]
    },
    {
      period: "07/2024 to 08/2024",
      title: "Java Developer Intern",
      company: "Kafein Technology Solutions",
      location: "Istanbul, Turkey",
      description: [
        "Developed web services with Spring Boot",
        "Created RESTful APIs for front-end and back-end integration",
        "Applied advanced Java techniques in various projects",
        "Managed HTTP requests for secure data flow",
        "Enhanced system efficiency with optimized code",
        "Boosted team collaboration on Spring Boot projects"
      ]
    },
    {
      period: "06/2023 to 09/2023",
      title: "SAP - ABAP Developer Intern",
      company: "Detaysoft",
      location: "Istanbul, Turkey",
      description: [
        "Specialized in ABAP programming language",
        "Developed 3 ABAP modules",
        "Conducted testing and documentation",
        "Reduced project timelines by 20%"
      ]
    }
  ];

  const education = {
    degree: "Computer Engineering",
    period: "September 2020 – June 2025",
    school: "Kadir Has University",
    location: "Istanbul, Turkey",
    details: "Full Scholarship",
    description: "Gained comprehensive knowledge through project-based learning in Computer Engineering, covering website development, full-stack development, hardware, AI, and networking. Strong theoretical foundation combined with hands-on projects in both frontend and backend development."
  };

  return (
    <section className="about-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h1 className="hero-title mb-4">Experience & Education</h1>
        </div>

        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="mb-5">
              <p className="lead text-secondary mb-4">
                Hi! I'm Yaren, a passionate Full Stack Developer based in Istanbul, Turkey. 
                I love creating beautiful and functional web applications that provide great user experiences.
              </p>
            </div>

            {/* Experience Section */}
            <div className="mb-5">
              <h2 className="fs-1 mb-4">Experience</h2>
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <div key={index} className="timeline-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="timeline-content">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h3 className="fs-4 mb-1">{exp.title}</h3>
                          <p className="text-accent mb-1">{exp.company}</p>
                          <p className="text-secondary small mb-3">{exp.location}</p>
                        </div>
                        <span className="period-badge">{exp.period}</span>
                      </div>
                      <ul className="text-secondary mb-0 ps-3">
                        {exp.description.map((item, i) => (
                          <li key={i} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="fs-1 mb-4">Education</h2>
              <div className="timeline">
                <div className="timeline-item fade-in-up">
                  <div className="timeline-content">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <div>
                        <h3 className="fs-4 mb-1">{education.degree}</h3>
                        <p className="text-accent mb-1">{education.school}</p>
                        <p className="text-secondary small mb-2">{education.location}</p>
                        <p className="text-success mb-3">{education.details}</p>
                      </div>
                      <span className="period-badge">{education.period}</span>
                    </div>
                    <p className="text-secondary mb-0">
                      {education.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
