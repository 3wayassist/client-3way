import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css'; // Import CSS file for styling
import Particle from "./Particle";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-bg"></div> {/* Full background image */}
      <div className="landing-content">
      <h1 className="landing-heading" style={{ fontSize: '5.5rem', textAlign: 'left' }}>3 WAY ASSIST</h1> {/* Heading */}
        <h6 className="landing-description"style={{ fontSize: '1rem' }}>We serves as a central hub for property managers or administrators to oversee and manage various aspects of the gated community operations. </h6> {/* Description */}
        <div className="landing-icons">
          {/* Icon links */}
          <Link to="/auth" className="landing-icon">
            <img src="admin.png" alt="Admin" />
            
          </Link>
          <Link to="/auth" className="landing-icon">
            
            <img src="owner.jpg" alt="Owner" />
            
          </Link>
          <Link to="/auth" className="landing-icon">
            <img src="employee.png" alt="Employee" />
            
          </Link>
          <Link to="/auth" className="landing-icon">
            <img src="tenant.png" alt="Tenant" />
            
          </Link>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default LandingPage;
