

import React from 'react';
import './Skills.css'; // Importing the updated CSS for styling

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="skills-content">
          <div className="skills-text">
            <h1 className="skills-heading">My Skills</h1>
            <p className="skills-description">
              As a developer, I specialize in both front-end and back-end technologies. Here are some of the skills I have developed over time:
            </p>
            <div className="skills-list">
              <div className="skill-item">
                <div className="skill-bar html">
                  <span className="skill-name">HTML</span>
                  <div className="progress-bar">
                    <div className="progress html-progress"></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-bar css">
                  <span className="skill-name">CSS</span>
                  <div className="progress-bar">
                    <div className="progress css-progress"></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-bar js">
                  <span className="skill-name">JavaScript</span>
                  <div className="progress-bar">
                    <div className="progress js-progress"></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-bar react">
                  <span className="skill-name">React.js</span>
                  <div className="progress-bar">
                    <div className="progress react-progress"></div>
                  </div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-bar node">
                  <span className="skill-name">Node.js</span>
                  <div className="progress-bar">
                    <div className="progress node-progress"></div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#contact" className="btn-skills">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

