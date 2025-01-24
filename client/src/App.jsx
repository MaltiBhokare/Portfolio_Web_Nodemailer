
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Correctly importing Routes and Route
import Header from './Header';  // Import your Header component
import Home from './Home';  // Import other components like Home, About, Skills, etc.
import About from './About';  // Import About page
import Skills from './Skills';  // Import Skills page
import Projects from './Projects';  // Import Projects page
import Contact from './Contact';  // Import Contact page
import Footer from './Footer';  // Import Footer component (if needed)

const App = () => {
  return (
    <Router>
      <Header /> {/* This will be displayed on all pages */}
      <div id="content">
        <Routes> {/* Correctly using Routes component */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer /> {/* Optionally add Footer here, which will be displayed on all pages */}
    </Router>
  );
};

export default App;
