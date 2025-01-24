



import React from 'react';
import './Projects.css';  // Importing the CSS for styling

// Importing the images
import projectImage1 from './assets/project1.png';
import projectImage2 from './assets/project2.png';
import projectImage3 from './assets/project3.jpg';
import projectImage4 from './assets/project4.jpg';
import projectImage5 from './assets/project5.png';
import projectImage6 from './assets/project6.png';

const Projects = () => {
  const projectData = [
    {
      title: 'Smart QR-Based Chocolate Vending Machine',
      description: 'A state-of-the-art chocolate vending machine system, where users can select and pay for their favorite chocolates using QR codes.',
      image: projectImage1,
      link: 'https://github.com/yourusername/project1'
    },
    {
      title: 'E-Commerce Web App',
      description: 'An advanced e-commerce platform offering seamless shopping experiences with user authentication, product listings, and secure payment integration.',
      image: projectImage2,
      link: 'https://github.com/yourusername/project2'
    },
    {
      title: 'AI-Powered Image Recognition',
      description: 'A cutting-edge AI model capable of recognizing and categorizing images from a large dataset with high accuracy.',
      image: projectImage3,
      link: 'https://github.com/yourusername/project3'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A real-time messaging app built using WebSockets for smooth communication, supporting group chats and private conversations.',
      image: projectImage4,
      link: 'https://github.com/yourusername/project4'
    },
    {
      title: 'Task Manager App',
      description: 'A productivity app that helps users manage their tasks effectively with features like task categorization, deadlines, and reminders.',
      image: projectImage5,
      link: 'https://github.com/yourusername/project5'
    },
    {
      title: 'Weather Forecast App',
      description: 'A weather forecasting app that shows real-time weather data and forecasts for multiple locations using a third-party API.',
      image: projectImage6,
      link: 'https://github.com/yourusername/project6'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <h1 className="projects-heading">My Projects</h1>
          <p className="projects-description">
            Explore some of the cutting-edge projects I have developed. Each one highlights my skills in full-stack web development, AI, and more!
          </p>
        </div>
        <div className="projects-list">
          {projectData.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.link} className="btn-project">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
