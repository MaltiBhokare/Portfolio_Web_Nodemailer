// import React from 'react';
// import './About.css'; // Import the CSS for styling

// const About = () => {
//   return (
//     <section id="about" className="about-section">
//       <div className="about-container">
//         <div className="about-header">
//           <h2 className="about-heading">About Me</h2>
//           <p className="about-subheading">Welcome to my journey as a developer!</p>
//         </div>
//         <div className="about-content">
//           <div className="about-text">
//             <p>
//               I'm a passionate software developer focused on creating innovative solutions using cutting-edge technologies. 
//               With a strong foundation in full-stack web development, I enjoy crafting seamless user experiences, optimizing systems, 
//               and solving complex problems through code. Let's dive into my skills and experiences.
//             </p>
//           </div>
//           <div className="about-details">
//             <div className="about-item">
//               <h3>Education</h3>
//               <p>Bachelor's in Computer Science Engineering from SVKM's Institute of Technology, Dhule</p>
//             </div>
//             <div className="about-item">
//               <h3>Skills</h3>
//               <p>Proficient in React, Node.js, JavaScript, Python, and various database management systems (SQL, MongoDB).</p>
//             </div>
//             <div className="about-item">
//               <h3>Experience</h3>
//               <p>Experience as a Web Development Intern at YHills, working with HTML, CSS, JavaScript, React, and PHP.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import React from 'react';
import './About.css'; // Importing the CSS for styling
import profileImage from './assets/profile.png'; // Importing the profile image

const About = () => {
  return (
    <section id="about-us" className="about-us-section">
      <div className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h1 className="about-us-heading">About Me</h1>
            <p className="about-us-description">
              Hello! I'm Malti, a passionate and dedicated web developer with a strong background in front-end and back-end technologies. 
              I thrive on challenges, continuously learning and improving to create functional and user-friendly applications. 
              When I'm not coding, you can find me exploring new technologies, attending meetups, or working on personal projects.
            </p>
            <p className="about-us-description">
              I'm currently seeking opportunities where I can apply my skills and contribute to building impactful digital solutions.
            </p>
            <a href="#contact" className="btn-about-us">Contact Me</a>
          </div>
          <div className="about-us-image-container">
            <img src={profileImage} alt="Profile" className="about-us-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
